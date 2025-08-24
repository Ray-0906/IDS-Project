from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import servers_collection, logs_collection
from app.models import Log, LogOut
from datetime import datetime

router = APIRouter()


def log_helper(log) -> dict:
    return {
        "id": str(log.get("_id")),
        "server": str(log.get("server")),
        "attack": log.get("attack"),
        "severity": log.get("severity"),
        "timestamp": log.get("timestamp"),
    }


@router.post("/logs", response_model=LogOut)
async def create_log(log: Log):
    # ensure timestamp
    payload = log.model_dump()
    if not payload.get("timestamp"):
        payload["timestamp"] = datetime.utcnow()

    # check server exists
    try:
        server_oid = ObjectId(payload["server"])
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid server ObjectId")

    server = await servers_collection.find_one({"_id": server_oid})
    if not server:
        raise HTTPException(status_code=404, detail="Server not found")

    # insert log
    payload["server"] = server_oid
    result = await logs_collection.insert_one(payload)

    # update server.logs
    await servers_collection.update_one({"_id": server_oid}, {"$push": {"logs": result.inserted_id}})

    payload["_id"] = result.inserted_id
    return log_helper(payload)
