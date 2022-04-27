const mongoose = require("mongoose");

const logSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: { type: String, required: true },
  description: { type: String, require: true },
  time: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("log", logSchema);
