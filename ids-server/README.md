# FastAPI + Motor example

A minimal FastAPI service using Motor (async MongoDB driver) that manages servers and their logs.

## Requirements
- Python 3.10+
- MongoDB running locally or a connection string

## Setup (Windows PowerShell)

```powershell
# 1) Create and activate a virtual environment
python -m venv .venv
. .\.venv\Scripts\Activate.ps1

# 2) Install dependencies
pip install -r requirements.txt

# 3) Configure environment (optional)
Copy-Item .env.example .env -Force
# Then edit .env if needed

# 4) Run the API
uvicorn app.main:app --reload
```

## Endpoints
- POST /api/servers
- GET /api/servers/{server_id}
- POST /api/logs

See routes under `app/routes/` for request/response models.

## Notes
- ObjectId values are handled as strings in requests/responses.
- The `logs` field on a server stores an array of Log IDs.
