const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "quiz", required: true },
  selectedAnswers: { type: [String], required: true },
  marks: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", resultSchema);
