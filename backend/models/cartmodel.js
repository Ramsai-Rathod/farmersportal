// Import Mongoose
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  productId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Product'
    },
  vendorId: { type: mongoose.Schema.Types.ObjectId,
     ref: 'users'
    },
  quantity: { type: Number,
     required: true ,
     default:1
    }
});

// Define the cart schema
const cartSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'users', required: true 
},
  products: [productSchema]
});

// Create the Cart model
const Cart = mongoose.model('Cart', cartSchema);

// Export the model
module.exports = Cart;
