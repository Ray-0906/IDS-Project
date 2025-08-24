from fastapi import APIRouter, HTTPException
from bson import ObjectId
from app.database import servers_collection
from app.models import Server, ServerOut

router = APIRouter()


def server_helper(server) -> dict:
    return {
        "id": str(server.get("_id")),
        "name": server.get("name"),
        "ip": server.get("ip"),
        "status": server.get("status"),
        "logs": [str(log_id) for log_id in server.get("logs", [])],
    }


@router.get("/servers/{server_id}", response_model=ServerOut)
async def get_server(server_id: str):
    try:
        oid = ObjectId(server_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid server ObjectId")

    server = await servers_collection.find_one({"_id": oid})
    if not server:
        raise HTTPException(status_code=404, detail="Server not found")
    return server_helper(server)


@router.post("/servers", response_model=ServerOut)
async def create_server(server: Server):
    payload = server.model_dump()
    if payload.get("logs") is None:
        payload["logs"] = []
    result = await servers_collection.insert_one(payload)
    payload["_id"] = result.inserted_id
    return server_helper(payload)
