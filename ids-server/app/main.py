from fastapi import FastAPI
from app.routes import server_routes, log_routes
from app.routes import check_routes

app = FastAPI()

# Register routes
app.include_router(server_routes.router, prefix="/api", tags=["Servers"])
app.include_router(log_routes.router, prefix="/api", tags=["Logs"])
app.include_router(check_routes.router, tags=["Check"])
