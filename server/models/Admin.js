const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  role: {
    type: String,
    default: "admin",
  },
  phone: { type: String, default: "" },
  presentAddress: { type: String, default: "" },
  permanentAddress: { type: String, default: "" },
  city: { type: String, default: "" },
  country: { type: String, default: "" },
  url: { type: String, default: "" },
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
});

module.exports = mongoose.model("admin", adminSchema);
