import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Import routes
import categoryRoutes from './routes/categoryRoutes';
import authRoutes from './routes/authRoutes';
import paymentRoutes from './routes/paymentRoutes'; 
import videoRoutes from './routes/videoRoutes'; // Import video routes

dotenv.config();

export const app = express();

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ORIGIN || '*',
    credentials: true,
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/videos', videoRoutes); // Add video routes

// Catch-all route for unknown paths
app.all('*', (req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`,
  });
});

// Note: The server setup and MongoDB connection are now in server.ts
