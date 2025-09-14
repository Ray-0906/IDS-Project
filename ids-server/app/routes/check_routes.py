from fastapi import APIRouter, HTTPException, Query, Request
from typing import Tuple, Dict, Any
from datetime import datetime
from bson import ObjectId

from app.database import servers_collection, logs_collection
from app.models import CheckResponse, FeatureVector
from app.ml_inference import predict_from_encoded_feature_dict

router = APIRouter()

# Legacy heuristic (kept in case model missing later or future toggle)

def _contains_sql_injection(text: str) -> bool:
    t = text.lower()
    patterns = ["' or 1=1", '" or 1=1', "union select", "--", "; drop table", "sleep("]
    return any(p in t for p in patterns)


def _heuristic_label(payload: Dict[str, Any]) -> Tuple[str, str]:
    return "normal", "Heuristic bypass (feature vector mode)"


@router.post("/check", response_model=CheckResponse)
async def check_request(request: Request, features: FeatureVector, serverId: str = Query(..., alias="serverId")):
    payload = features.model_dump()

    # Resolve server
    server = None
    oid = None
    try:
        oid = ObjectId(serverId)
        server = await servers_collection.find_one({"_id": oid})
    except Exception:
        server = await servers_collection.find_one({"name": serverId})
    if not server:
        raise HTTPException(status_code=404, detail="Server not found")
    if oid is None:
        oid = server["_id"]

    model = request.app.state.ml_model
    if model is None:
        label, reason = _heuristic_label(payload)
        return CheckResponse(status="green", label=label, reason=reason, confidence=0.0, attack="Normal")

    try:
        prediction = predict_from_encoded_feature_dict(payload, model)
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Model inference error: {e}")
    
    confidence = prediction['probability_of_anomaly']
    attack_type = prediction.get('attack_type')
    is_anomaly = prediction['prediction'] == 'Anomaly' and confidence > 0.5

    if not is_anomaly:
        return CheckResponse(
            status="green",
            label="normal",
            reason="Predicted normal" if prediction['prediction'] == 'Normal' else "Model confidence below threshold",
            confidence=round(confidence * 100, 2),
            attack=attack_type,
        )

    log_doc = {
        "server": oid,
        "attack": attack_type or "Unknown",
        "severity": "High" if confidence > 0.8 else "Medium",
        "timestamp": datetime.utcnow(),
    }
    result = await logs_collection.insert_one(log_doc)
    await servers_collection.update_one({"_id": oid}, {"$push": {"logs": result.inserted_id}})

    return CheckResponse(
        status="red",
        label="malicious",
        reason="Model anomaly detected",
        logId=str(result.inserted_id),
        confidence=round(confidence * 100, 2),
        attack=attack_type,
    )
