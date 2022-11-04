const mongoose = require("mongoose");

const photographerSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
});
