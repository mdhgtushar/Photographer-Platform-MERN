const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
