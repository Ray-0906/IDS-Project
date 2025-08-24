from fastapi import APIRouter, HTTPException, Query
from typing import Tuple
from datetime import datetime
from bson import ObjectId

from app.database import servers_collection, logs_collection
from app.models import TrafficSample, CheckResponse

router = APIRouter()


def _contains_sql_injection(text: str) -> bool:
    t = text.lower()
    patterns = [
        "' or 1=1",
        '" or 1=1',
        "union select",
        "--",
        "; drop table",
        "sleep(",
    ]
    return any(p in t for p in patterns)


def _classify(sample: TrafficSample) -> Tuple[str, str]:
    # Simple heuristic placeholder for an ML model.
    # Replace with real model inference as needed.
    # Returns: (label, reason)
    if sample.method.upper() not in {"GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"}:
        return "malicious", f"Suspicious HTTP method: {sample.method}"

    url_lower = sample.url.lower()
    if _contains_sql_injection(url_lower):
        return "malicious", "SQL injection pattern in URL"

    # Headers
    for k, v in (sample.headers or {}).items():
        if isinstance(v, str) and _contains_sql_injection(v):
            return "malicious", f"SQL injection pattern in header: {k}"

    # Body (assumes dict values)
    if isinstance(sample.body, dict):
        for k, v in sample.body.items():
            if isinstance(v, str) and _contains_sql_injection(v):
                return "malicious", f"SQL injection pattern in body field: {k}"

    return "normal", "No suspicious patterns"

@router.post("/check", response_model=CheckResponse)
async def check_request(sample: TrafficSample, serverId: str = Query(..., alias="serverId")):
    # Resolve server by ObjectId or by name fallback
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

    label, reason = _classify(sample)
    if label == "normal":
        return CheckResponse(status="green", label=label, reason=reason)

    # Malicious: create a log and link it to the server
    log_doc = {
        "server": oid,
        "attack": reason,
        "severity": "High",
        "timestamp": sample.timestamp or datetime.utcnow(),
    }
    result = await logs_collection.insert_one(log_doc)
    await servers_collection.update_one({"_id": oid}, {"$push": {"logs": result.inserted_id}})

    return CheckResponse(status="red", label=label, reason=reason, logId=str(result.inserted_id))
