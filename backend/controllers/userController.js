const handler =require('express-async-handler')
const User =require('../models/userModels')
const bcrypt=require('bcrypt');
const send=require('../utils/mailsender')
const generateToken=require( '../utils/generateToken');
const { ClientSession } = require('mongodb');


const registeruser=handler(async(req,res)=>{  
    const{username,gmail,password,phoneno,catageory}=req.body;
    const userexist=await User.findOne({gmail})
    if(userexist){
        res.status(400).send("user already exist");
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
        res.status(401).send("user credentials are wrong!!");
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
        user.gmail= req.body.gmail||user.gmail;
        user.profile=req.file.filename||user.profile;
    const updated=await user.save();
    res.status(200).json({
        _id:updated._id,
        username:updated.username,
        gmail:updated.gmail,
        profile:updated.profile
    });
}
    else{
        res.status(404);
        throw new Error("user not found");
    }
   
});


const resetpasswordgmail=handler(async(req,res)=>{
    const{gmail}=req.body;
const user=await User.findOne({gmail:gmail});
 if(user)
{
    var rn = require('random-number');
var options = {
  min:  10000
, max:  99999
, integer: true
}
const otp=rn(options);
    user.otp=otp;
    await user.save();
     var data=`OTP for password reset is ${otp} `;
     console.log(gmail,otp);
      const stat= send(gmail,data);
      if(stat)
      {
        res.status(200).send("OTP is sent to your email");
      }
      else{
        res.status(500).send("error in sending email.Try again");
      }
}
else{
    res.status(400).send("user not found");
}

});
const sendotp=handler(async(req,res)=>{
    console.log(req);
    console.log("its here")
    const sentotp=parseInt(req.body.otp);
    const user=await User.findOne({otp:sentotp});
    if(user)
    {
        user.password=req.body.password;
        user.otp=null;
        user.save();
        return res.status(200).send("password has changed succesfully!!")
    }
    else{
        return res.status(400).json("user doesn't exist");
    }

})
module.exports={loginuser,registeruser,updateuserprofile,userprofile,logoutuser,resetpasswordgmail,sendotp};
