const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  tokenNumber: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "waiting"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Queue", queueSchema);