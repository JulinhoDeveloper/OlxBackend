const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
      name: {
        type: String
      },
      email: {
        type: String
      },
      state: {
        type: String,
      },
      passwordHash: {
        type: String
      },
      token: {
        type: String
      },
    },
    { timestamps: true },
  )
  module.exports= mongoose.model('Userss', userSchema);
