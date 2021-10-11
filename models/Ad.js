const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    
    idUser: {
      type: String
    },
    state: {
      type: String
    },
    category: {
      type: String,
    },
    images: {
      type: [Object]
    },
    dateCreated: {
      type: [Date]
    },
    title: {
        type: String
      },
      price: {
        type: Number
      }, 
      priceNegotiable: {
        type: Boolean
      },
      description: {
        type: String
      },
      views: {
        type: Number
      },
      Status: {
        type: String
      },
  },
  { timestamps: true },
)
module.exports  = mongoose.model('Ad', adSchema);