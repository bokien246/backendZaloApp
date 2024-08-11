const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});


const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
