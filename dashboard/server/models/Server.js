import mongoose from "mongoose";

const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["online", "offline"],
    default: "online",
  },
  logs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Log"
    }
  ]
});

const Server = mongoose.model("Server", serverSchema);

export default Server;
