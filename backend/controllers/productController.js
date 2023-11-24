const handler=require('express-async-handler');
const {Product} =require('../models/productmodel');

const getproduct=handler(async(req,res)=>{
const product=await Product.find({id:req.params.id})
if(!product)
res.status(400).json({"message":"item not found"});
res.status(201).json({product});
});

const addproduct=handler(async(req,res)=>{
    const{userid,productname,price,description,quantitiy}=req.body;
    const product=await Product.create({
        user_id:userid,
        productname,
        price,
        quantitiy,
        description,
    })
    if(!product)res.status(401).json({message:"internal server error product not added"})
    res.status(201).json({message:"product created succesfully"})

});

const updateproduct=handler(async(req,res)=>{ 
    const product=await Product.findById({id:req.params.id})
    if(!product)
    res.status(401).json({message:"product not found"})
    await Product.FindByIdAndUpdate({id:req.params.id,},req.body,{new:true})
    .then(res.status(201).json("product is updated succesfully"))

});

const deleteproduct=handler(async(req,res)=>{
    const product=await Product.findById({id:req.params.id})
    if(!product)res.status(401).json({message:"product is not found"})
    await Product.deleteOne({id:req.params.id}).then(res.status(201).json({message:"product deleted succesfully"}))

});
const showProducts=handler(async(req,res)=>{
    const products=await Product.find({})
    if(!products)
    res.status(400).json({"message":"item not found"});
    res.status(201).json({products});
    });
    const showProduct=handler(async(req,res)=>{
        const product=await Product.find({id:req.params.id})
        if(!product)
        res.status(400).json({"message":"item not found"});
        res.status(201).json({product});
        });

module.exports={getproduct,updateproduct,addproduct,deleteproduct,showProduct,showProducts};
