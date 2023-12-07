const express=require( 'express');
const cors=require('cors')
const cookieParser=require( 'cookie-parser');
const mongoose=require( 'mongoose');
const userrouter=require( './routes/userRoutes');
const productrouter=require('./routes/product_routes');
const errorHandler =require( './middlewares/errorMiddleware');
const config=require('./config')
const path=require('path');
const cartroutes=require('./routes/cartroutes');
const orderroutes=require('./routes/order-routes')
const Payment=require('./models/payments')
const razorpay =require("razorpay");
const crypto =require("crypto")
mongoose.connect(config.mongodburl)
const app=express();
let port=5000;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
 app.get('/',(req,res)=>res.send("server is ready"));
app.listen(port,()=>console.log(`listening on the sever ${port}`))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
 app.use(errorHandler);
 app.use('/user',userrouter);
 app.use('/product',productrouter);
 app.use('/cart',cartroutes);
 app.use('/order',orderroutes);

 const instance = new razorpay({
    key_id: "rzp_test_H44VRlIpLQnD7c",
    key_secret:'LUiDY5TULM70AKItkleOGDma',
   
})

app.post("/checkout",async(req,res)=>{

    const options ={
        amount:Number(req.body.amount*100),
        currency:"INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
        success:true,order
    })

})

// payemnt verification
app.post("/paymentverification",async(req,res)=>{
   const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
   const body = razorpay_order_id + "|" +razorpay_payment_id;
   const expectedsgnature =crypto.createHmac('sha256','LUiDY5TULM70AKItkleOGDma').update(body.toString()).digest('hex')
   const isauth = expectedsgnature === razorpay_signature;
   if(isauth){
    await Payment.create({
        razorpay_order_id,razorpay_payment_id,razorpay_signature 
    })
    res.status(200).send("payment complete");
   }
   else{
    res.status(400).json({success:false});
   }
})

app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:"rzp_test_H44VRlIpLQnD7c"})
})
