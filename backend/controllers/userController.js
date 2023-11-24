const handler =require('express-async-handler')
const User =require('../models/userModels')
const jwt =require('jsonwebtoken');
const bcrypt=require('bcrypt')
const generateToken=require( '../utils/generateToken');
const registeruser=handler(async(req,res)=>{  
    const{username,gmail,password,phoneno,catageory}=req.body;
    const userexist=await User.findOne({gmail})
    if(userexist){
        res.status(400);
        throw new Error("user already exists");
    }
    const user=await User.create({
        username,
        gmail,
        password,
        phoneno,
        catageory
    });
    if(user){
        generateToken(res,user._id);
        res.status(201).json({
            id:user._id,
            username:user.username,
            gmail:user.gmail
        })
    }else{
        res.status(400);
        throw new error("invalid user data");
    }

     });
const loginuser=handler(async(req,res)=>{
    const{gmail,password}=req.body;
const user=await User.findOne({gmail:gmail});
    if(user){
        await bcrypt.compare(user.password,password)
        generateToken(res,user._id);
        res.status(200).json({
            id:user._id,
            username:user.username,
            gmail:user.gmail
        })
    }else{
        res.status(401);
        throw new Error("invalid gmail or password");
    }
});
const logoutuser=handler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0),
    });
    res.status(201).json({message:'user logged out'})
});
const userprofile=handler(async(req,res)=>{
    const user=req.user;
    res.status(200).json({
        id:user._id,
        username:user.username,
        gmail:user.gmail
    })
    res.status(201).json({message:'user profile user'})
});

const updateuserprofile=handler(async(req,res)=>{
    const user=await User.findById(req.user._id);
    if(user){
        user.username= req.body.username||user.username;
        user.gmail= req.body.gmail||user.gmail;

    
    if(req.body.password)
    {
        user.password=req.body.password;
    }
    const updated=await user.save();
    res.status(200).json({
        _id:updated._id,
        username:updated.username,
        gmail:updated.gmail
    });
}
    else{
        res.status(404);
        throw new Error("user not found");
    }
   
});

module.exports={loginuser,registeruser,updateuserprofile,userprofile,logoutuser};
