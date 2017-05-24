'use strict'

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: Number,
  loginName: String,
  displayName: String,
  password: String,
  phoneNumber: Number,
  defOrg: { orgID: String, orgName: String },
  orgRange: [{
    orgID: String,
    orgName: String
  }],
  defQueryRule: {
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    billStatus: { type: Number, default: -1 }
  }
})

const User = mongoose.model('User', userSchema);

export default User