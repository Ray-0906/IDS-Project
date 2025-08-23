import { get } from "mongoose";
import Log from "../models/Logs.js";
import Server from "../models/Server.js";

export const addLog = async (req, res) => {
    const { serverId } = req.params;
    const {  attack, severity } = req.body;
    try {
        const log = new Log({ server: serverId, attack, severity });
        await log.save();
        const server = await Server.findById(serverId);
        server.logs.push(log);
        await server.save();    
        res.status(201).json({ message: "Log added successfully", log });
    } catch (error) {
        res.status(500).json({ message: "Error adding log", error });
    }
};  

export const getLogs = async (req, res) => {
    const { serverId } = req.params;
    try {
        const logs = await Log.find({ server: serverId }).populate("server");
        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching logs", error });
    }
};

export const getWeeklyLogs = async (req, res) => {
    const { serverId } = req.params;
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    try {
        const logs = await Log.find({ server: serverId, timestamp: { $gte: oneWeekAgo } }).populate("server");
        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching weekly logs", error });
    }
};

export const getMonthlyLogs = async (req, res) => {
    const { serverId } = req.params;
    const oneMonthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    try {
        const logs = await Log.find({ server: serverId, timestamp: { $gte: oneMonthAgo } }).populate("server");
        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching monthly logs", error });
    }
};

export const getYearlyLogs = async (req, res) => {
    const { serverId } = req.params;
    const oneYearAgo = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    try {
        const logs = await Log.find({ server: serverId, timestamp: { $gte: oneYearAgo } }).populate("server");
        res.status(200).json({ logs });
    } catch (error) {
        res.status(500).json({ message: "Error fetching yearly logs", error });
    }
};