import express from 'express';
import { loginUser, logoutUser, registerUser, verifyUser } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/login',loginUser );
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/verify', verifyUser);

export default router;