const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: {
    required: [true, 'please add  your name'],
    type: String,
  },
  age: {
    type: Number,
    required: [true, 'please add your age !!'],
  },
  email: {
    type: String,
    required: [true, 'please add your email !!'],
   
  },
  password: {
    type: String,
    required: [true, 'please add your password !!'],
  },
});

const user = mongoose.model('user', userSchema);
module.exports = user;