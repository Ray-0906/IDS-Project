import express from 'express';
import { addLog, getLogs, getMonthlyLogs, getWeeklyLogs } from '../controllers/LogsController.js';
addLog
const router = express.Router();

router.get('/all/:serverId', getLogs);
router.post('/add/:serverId', addLog);
router.get('/weekly/:serverId', getWeeklyLogs);
router.get('/monthly/:serverId', getMonthlyLogs);

export default router;