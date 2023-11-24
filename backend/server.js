const express=require( 'express');
const cors=require('cors')
const cookieParser=require( 'cookie-parser');
const mongoose=require( 'mongoose');
const userrouter=require( './routes/userRoutes');
const productrouter=require('./routes/product_routes');
const errorHandler =require( './middlewares/errorMiddleware');
mongoose.connect('mongodb+srv://ramsaibanoth207:YBxsXExtethSnAjN@cluster0.yiqlekc.mongodb.net/farmersdb')
const app=express();
let port=5000;
app.use(cors());
 app.get('/',(req,res)=>res.send("server is ready"));
app.listen(port,()=>console.log(`listening on the sever ${port}`))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
 app.use(errorHandler);
 app.use('/user',userrouter);
 app.use('/product',productrouter);