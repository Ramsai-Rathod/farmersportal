const mongoose=require('mongoose');
const product_schema=mongoose.Schema({
    user_id:
    {
        type:mongoose.SchemaTypes.ObjectId,
    },
    productname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
   
    
},{timestamps:true})
module.exports=mongoose.model('Product',product_schema);
