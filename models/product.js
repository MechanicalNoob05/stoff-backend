const mongoose = require('mongoose')
const BookingSchema = mongoose.Schema(
    {
      store: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "store"},
      Quantity: {type: String,required: true,},
      Name: {type: String,required: true,},
      Gender: {type: String,required: true,},
      Description: {type: String,required: true,unique: true},
      Highlight: {type: String,required: true,},
      color: [{type: String,required: true,}],
      Images: [{type: String,required: true,}],
      Price: {type: String,required: true,},
    },
    {
      timestamps: true,
      collection: 'Products', 
    }
  );

  const Product  =  mongoose.model('product', BookingSchema);
  module.exports = Product;