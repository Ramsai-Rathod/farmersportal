const Cart=require('../models/cartmodel')

const addProductToCart=async(req,res)=> {
    try {
      console.log(req.user._id,req.params.id,req.body.quantity)
        const userId=req.user._id;
        const productid=req.params.id;
        const quantity=parseInt(req.body.quantity);
      // Find the user's cart or create a new one if not exists
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId,
             products: [] });
      }
  
      // Check if the product is already in the cart
      const existingProductIndex = cart.products.findIndex(
        (product) => product.productId.toString() === productid
      );
  
      if (existingProductIndex !== -1) {
        // If the product exists, update the quantity
        cart.products[existingProductIndex].quantity+= quantity;
      } else {
        // If the product doesn't exist, add it to the cart
        cart.products.push({
           vendorId: req.body.vendorId,
            quantity:quantity,
            productId:productid
      });
      }
  
      // Save the cart
      await cart.save();
  
      console.log('Product added to cart successfully');
     return res.status(201).json({success:true,msg:"product added succesfully"})
    } catch (error) {
      console.error('Error adding product to cart:', error.message);
      return res.status(401).send("error while adding into cart");
    }
  }
  const getcart=async(req,res)=>{
    try {
      const cart = await Cart.findOne( {userId:req.user._id} )
      if (!cart) {
        return res.status(200).json({msg:"no items in cart"});
      }
      const cartdata= await Cart.findOne({userId:req.user._id}).populate({
          path: 'products',
          match: { productId: { $in:req.body.products } }, // Filter products by the specified productIds
          populate: {
            path: 'productId',
            model: 'Product', // Replace with the actual model name for your Product schema
          },
        })
        .exec();
      // Filter out products that are not found
      const products = cartdata.products.filter((product) => product.productId);
      return res.status(200).send(products);
    } catch (error) {
      console.error('Error retrieving product details:', error);
      throw error;
    }
  }
  
  const removeProductFromCart=async(req,res)=> {
    try {
      // Find the user's cart
      const userId=req.user._id;
      const productid=req.params.id;
      const cart = await Cart.findOne({ userId });
  
      if (!cart) {
        console.log('User does not have a cart.');
        return res.status(200).json({success:true,msg:"user doesn't have items in cart"})
        return;
      }
  
      // Find the index of the product in the cart
      const productIndex = cart.products.findIndex(
        (product) => product.productId.toString() === productid
      );
  
      if (productIndex !== -1) {
        // If the product is found, remove it from the array
        cart.products.splice(productIndex, 1);
  
        // Save the updated cart
        await cart.save();
        console.log('Product removed from cart successfully');
        return res.status(201).json({success:true,msg:"product removed succesfully"})
      } else {
        console.log('Product not found in the user\'s cart.');
      }
    } catch (error) {
      console.error('Error removing product from cart:', error.message);
      return res.status(401).json({success:false,msg:error.message})
    }
  }
  
const Deletecart=async(id)=>{
  try {
         const cart=await Cart.findOne({userId:id});
         if(cart)
         {
          await Cart.findOneAndDelete({userId:id});
         }
         else{
          res.status(300).send("no cart found");
         }
  } catch (error) {
    console.error('Error removing product from cart:', error.message);
      return res.status(401).json({success:false,msg:error.message})
  }
}
  module.exports={addProductToCart,removeProductFromCart,getcart,Deletecart};