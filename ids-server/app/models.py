from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime


class Log(BaseModel):
    server: str  # store ObjectId as hex string in requests
    attack: str
    severity: str
    timestamp: Optional[datetime] = None


class LogOut(Log):
    id: str


class Server(BaseModel):
    name: str
    ip: str
    status: Optional[str] = "online"
    logs: Optional[List[str]] = Field(default_factory=list)  # ObjectId strings


class ServerOut(Server):
    id: str


# Incoming traffic sample for /check
class TrafficSample(BaseModel):
    ip: str
    method: str
    url: str
    headers: Dict[str, Any]
    body: Optional[Dict[str, Any]] = None
    protocol: str
    port: int
    timestamp: Optional[datetime] = None


class CheckResponse(BaseModel):
    status: str  # "green" | "red"
    label: Optional[str] = None  # "normal" | "malicious"
    reason: Optional[str] = None
    logId: Optional[str] = None
