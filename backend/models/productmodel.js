const mongoose=require('mongoose');
const product_schema=mongoose.Schema({
    user_id:
    {
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
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
    },
    catageory:{
        type:String,
        required:true,
    },
    productimages:{
        type:Array,
        required:true,
        validate:[arraylimit,"you can pass only 5 images"]
    }
},{timestamps:true})
function arraylimit(val){
 return val.length<=5;
}
module.exports=mongoose.model('Product',product_schema);
