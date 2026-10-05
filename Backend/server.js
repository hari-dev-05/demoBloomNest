import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(
  cors({
    origin: [allowedOrigin, 'http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'BloomNest API Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Root API endpoint
app.get('/', (req, res) => {
  res.send('BloomNest Backend API Service');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Database connection & Server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bloomnest';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(' Successfully connected to MongoDB database');
    app.listen(PORT, () => {
      console.log(` BloomNest Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' MongoDB Connection Error:', err.message);
    console.log(' Starting express server without database connection for fallback...');
    app.listen(PORT, () => {
      console.log(` BloomNest Server running on http://localhost:${PORT} (MongoDB offline)`);
    });
  });
