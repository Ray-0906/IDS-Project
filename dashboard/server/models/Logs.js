import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    server: { type: mongoose.Schema.Types.ObjectId, ref: "Server" },
    attack: String,
    severity: String,
    timestamp: { type: Date, default: Date.now }
});

const Log = mongoose.model("Log", logSchema);

export default Log;
