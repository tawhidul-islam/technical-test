const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  cardId: { type: String },
  phone: { type: String, default: "" },
  dob: { type: Date },
  email: { type: String, required: true },
  address: { type: String },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  role: {
    type: String,
    default: "user",
  },
  avatar: { type: String, default: "" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  createdTime: { type: Date, default: Date.now() },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  updatedTime: { type: Date, default: Date.now() },
  password: { type: String },
  isDelete: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", userSchema);
