import express from 'express';
import { createServer, getServers } from '../controllers/serverController.js';

const router = express.Router();

router.post('/add',createServer);
router.get('/list', getServers);

export default router;