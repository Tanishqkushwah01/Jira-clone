import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import planRoutes from './routes/planRoutes.js';
import leadRoutes from './routes/leadRoutes.js';

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/plans', planRoutes);
app.use('/api/leads', leadRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Jira Pricing Clone API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
