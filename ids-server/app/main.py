from fastapi import FastAPI
from contextlib import asynccontextmanager
from pathlib import Path

from app.routes import server_routes, log_routes, check_routes

# Lazy optional import to avoid startup failure if model missing
from app.ml_inference import load_xgb_model

MODEL_PATH = Path("ML/best_xgboost_model.json")


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.ml_model = None
    if MODEL_PATH.exists():
        try:
            app.state.ml_model = load_xgb_model(MODEL_PATH)
        except Exception as e:
            # Model stays None; could log this
            app.state.model_load_error = str(e)
    yield
    # No special close needed for xgboost model


app = FastAPI(lifespan=lifespan)

# Register routes
app.include_router(server_routes.router, prefix="/api", tags=["Servers"])
app.include_router(log_routes.router, prefix="/api", tags=["Logs"])
app.include_router(check_routes.router, tags=["Check"])
