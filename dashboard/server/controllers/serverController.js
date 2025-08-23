import Server from "../models/Server.js";
import User from "../models/user.js";


export const createServer = async (req, res) => {
    const { name, ip } = req.body;
    const userId = req.user.id;
    try {
        const newServer = new Server({ name, ip });
        await newServer.save();
        const user = await User.findById(userId);
        user.servers.push(newServer._id);
        await user.save();
        res.status(201).json({ message: "Server created successfully", server: newServer });
    } catch (error) {
        res.status(500).json({ message: "Error creating server", error });
    }
};


export const getServers = async (req, res) => {
    const userId = req.user.id;
    try {
        const user = await User.findById(userId).populate("servers");
        res.status(200).json({ servers: user.servers });
    } catch (error) {
        res.status(500).json({ message: "Error fetching servers", error });
    }
};



export const deleteServer = async (req, res) => {
    const userId = req.user.id;
    const { serverId } = req.params;

    try {
        const user = await User.findById(userId);
        user.servers.pull(serverId);
        await user.save();
        await Server.findByIdAndDelete(serverId);
        res.status(200).json({ message: "Server deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting server", error });
    }
};