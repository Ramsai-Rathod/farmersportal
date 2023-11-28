const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
       required: true
     },
  products: [{ 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Product' 
    }],
  totalPrice: {
     type: Number, 
     required: true
     },
  status: {
     type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'canceled'],
       default: 'pending'
     },
  paymentDetails: {
    type:String,
    required:true,
    default:"COD"
  },
  shippingAddress: {
    type:String,
    required:true
  },
  orderDate: { 
    type: Date, 
    default: Date.now 
},
  lastUpdated: {
     type: Date, 
     default: Date.now 
    },

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
