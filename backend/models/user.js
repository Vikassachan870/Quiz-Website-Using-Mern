const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, Unique: true },
  password:{ type: String, required: true },
  role: { type: String, default: "user", enum: ["user", "admin"] },
  timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model("user",user);
