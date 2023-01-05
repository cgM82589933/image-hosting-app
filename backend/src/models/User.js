const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
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
  date_created: {
    type: Date,
    default: Date.now,
  },
  last_modified: {
    type: Date,
    default: Date.now,
  }
});

module.exports = User = mongoose.model('users', UserSchema);
