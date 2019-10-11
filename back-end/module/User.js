const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  birthY: {
    type: String,
    required: true,
  },
  birthP: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", UserSchema);
module.exports = User