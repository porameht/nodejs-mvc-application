const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "Thailand",
  },
  data: {
    type: Date,
    dafault: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
