// Load environment variables from .env file (must be first)
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Enable CORS so frontend (hosted separately) can call this API
app.use(cors());
// Log incoming requests to console (method, URL, status, response time)
app.use(morgan('dev'));
// Parse incoming JSON request bodies
app.use(express.json());
// Serve uploaded files statically (e.g. task attachments)
app.use('/uploads', express.static('uploads'));

// Route groups
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Simple health check endpoint (used for uptime monitoring / bonus feature)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

app.get('/', (req, res) => {
  res.send('Server chal raha hai!');
});

// Centralized error handler - catches errors thrown by any route
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Wait for the MongoDB connection to be ready BEFORE accepting HTTP requests.
// (Week 6 performance fix: avoids slow first-request latency - see PERFORMANCE.md)
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log('MongoDB connection error:', err);
    process.exit(1);
  }
}

startServer();

module.exports = app;
