const Cart=require('../models/cartmodel')

const addProductToCart=async(req,res)=> {
    try {
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
      const data=await Cart.findOne({userId:req.user._id});
      if(data)
      {
        return res.status(200).send(data);
      }
      else{
        return res.status(401).send("no cart is found");
      }
      
    } catch (error) {
      return res.status(400).send("error in retriving data");
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