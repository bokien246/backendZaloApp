const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRouter');
const attendanceRoutes = require('./routes/attendanceRouter');
const departmentRoutes = require('./routes/departmentRouter');
const dotenv = require('dotenv');
const Point = require('./models/Point');
const connectDatabase = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Sử dụng routes liên quan đến người dùng
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/event', eventRoutes);
app.use('/api/v1/attendance', attendanceRoutes);
app.use('/api/v1/department', departmentRoutes);

// Route to add a new point
app.post('/api/v1/add-point', async (req, res) => {
  try {
    const { name, score } = req.body;
    const newPoint = new Point({ name, score });
    await newPoint.save();
    res.status(201).send('Point added successfully!');
  } catch (err) {
    res.status(400).send('Error adding point: ' + err.message);
  }
});

// Khởi động server
connectDatabase().then((res) => {
  console.log(res);
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
