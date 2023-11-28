const Order=require('../models/ordermodel')
const controller=require('../controllers/cartcontroller')


const CreateOrder=async(req,res)=>{
    try {
        const order=await Order.create({
            userId:req.user._id,
            products:req.body.products,
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
               return res.status(200).json({order})
         }
            
        else{
            res.status(300).json({msg:"order doesn't exist"})
        }
    } catch (error) {
        return res.status(400).json({err:err.message})
    }
}
module.exports={CreateOrder,Deleteorder,Getorders}