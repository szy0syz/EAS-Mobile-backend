'use strict'

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  loginName: String,
  password: String,
  displayName: String,
  phoneNumber: Number
})

const Users = mongoose.model('Users', userSchema);

export default Users