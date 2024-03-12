const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  selectedState: String,
  selectedCity: String,
  pincode: Number,
  mobileNumber: {
    type: Number,
    unique: true,
  },
  birthdate: Date,
  fullName: String,
  gender: String,
});

const UsersModels = mongoose.model("users", UsersSchema);
module.exports = UsersModels;
