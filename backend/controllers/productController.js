const handler=require('express-async-handler');
const Product =require('../models/productmodel');

const getproduct=handler(async(req,res)=>{
const products=await Product.find({user_id:req.user._id})
if(products){
   return res.status(200).json({products});
}
if(!products)
 return res.status(400).json({"message":"item not found"});
});

const addproduct=handler(async(req,res)=>{
    const images=[];
    for(var i=0;i<req.files?.length;i++)
    {
        images[i]=req.files[i].filename;
    }
    const{productname,price,description,quantity,catageory}=req.body;
    const product=await Product.create({
        user_id:req.user._id,
        productname,
        price,
        quantity,
        description,
        catageory,
        productimages:images,
    })
    if(!product)
   return res.status(401).json({message:"internal server error product not added"})

    return res.status(201).json({message:"product created succesfully"})

});

const updateproduct=handler(async(req,res)=>{ 
    const product=await Product.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
    if(product){
        console.log(req.body);
        product.quantity=req.body.quantity?req.body.quantity:product.quantity;
        product.price=req.body.price||product.price;
        await product.save().then(
            res.status(200).json({product,msg:"product updated succesfully"})
        )
    }
    
    if(!product)
    return res.status(401).json({message:"product not found"})
   

});

const deleteproduct=handler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(!product)
    return res.status(401).json({message:"product is not found"})
    await Product.deleteOne({_id:req.params.id})
.then(res.status(201).json({message:"product deleted succesfully"}))
.catch(err)(
     res.status(500).json({err,msg:"product not updated in DB"})
)

});
const showProducts=handler(async(req,res)=>{
    const products=await Product.find({})
    if(products){
       return res.status(201).json({products});
    }
    if(!products){
    return res.status(400).json({message:"item not found"});
    }
    else{
        throw new Error("db error in finding products");
    }
    });

    // const showProduct=handler(async(req,res)=>{
    //     const product=await Product.find({id:req.params.id})
    //     if(product)
    //     {

    //         return res.status(201).json({product});
    //     }
    //     if(!product)
    //     {

    //        return res.status(400).json({"message":"item not found"});
    //     }
    //     });

module.exports={getproduct,updateproduct,addproduct,deleteproduct,showProducts};
