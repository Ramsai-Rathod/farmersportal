const Order=require('../models/ordermodel')
const controller=require('../controllers/cartcontroller')
const Cart=require('../models/cartmodel');

const CreateOrder=async(req,res)=>{
    const cartdetails=await Cart.findById(req.bodt.cartid)
    try {
        const order=await Order.create({
            userId:req.user._id,
           cartid:req.body.cartid,
           products:products,
            totalPrice:req.body.totalPrice,
            paymentDetails:req.body.paymentDetails,
            shippingAddress:req.body.shippingAddress,
        }) 
        
        if(order)
        {
            controller.Deletecart(req.user._id);
           return res.status(201).json({success:true,order})
        }  
        else{
            res.status(200).json({msg:"error while creating the order"})
        }     
    } catch (error) {
        return res.status(400).json({err:err.message})
    }
}
const Deleteorder=async(req,res)=>{
    try {
        const order=await Order.findById(req.params.id);
        if(order)
        {
            if(order.paymentDetails==="COD")
            {
                await Order.findByIdAndDelete(req.params.id)

                res.status(200).json({msg:`order has canceled`})
            }
            else{
                const amount=order.totalPrice;
                await Order.findByIdAndDelete(req.params.id);
               return res.status(200).json({msg:`order has canceled and amount ${amount}  will get refund`})
            }
        }
        else{
            res.status(200).json({msg:"order doesn't exist"})
        }
    } catch (error) {
        return res.status(400).json({err:err.message})
    }
}
const Getorders=async(req,res)=>{
    try {
        const order=await Order.findOne({userId:req.user._id});
        if(order)
        {
            const Ordersdata= await Order.findOne({userId:req.user._id}).populate({
                path: 'products',
                match: { productId: { $in:req.body.products } }, // Filter products by the specified productIds
                populate: {
                  path: 'productId',
                  model: 'Product', // Replace with the actual model name for your Product schema
                },
              })
              .exec();
            // Filter out products that are not found
            const products = Ordersdata.products.filter((product) => product.productId);
            return res.status(200).send(products);
         }
            
        else{
            res.status(300).json({msg:"order doesn't exist"})
        }
    } catch (error) {
        return res.status(400).json({err:err.message})
    }
}
module.exports={CreateOrder,Deleteorder,Getorders}