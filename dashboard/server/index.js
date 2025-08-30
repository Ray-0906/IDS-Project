import express from 'express';
import { connectDB } from './configs/db.js';
import authRoutes from './routes/authRoute.js';
import logRoutes from './routes/logRoute.js';
import serverRoutes from './routes/serverRoute.js';
import { authMiddleware } from './middlewares/authmiddleware.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
config();
const app = express();

// middleware
app.use(cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// define routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/auth', authRoutes);
app.use('/logs', authMiddleware, logRoutes);
app.use('/servers', authMiddleware, serverRoutes);

app.listen(3000, () => {
    connectDB();
  console.log('Server is running on port 3000');
});