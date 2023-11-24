const jwt=require('jsonwebtoken');
const asynchandler=require('express-async-handler');
const User=require('../models/userModels');

const protect=asynchandler(async(req,res,next)=>{
let token;
token=req.cookies.jwt;
if(token){
    try {
        const decoder=jwt.verify(token,'ramsai@');
        req.user=await User.findById(decoder.userId).select('-password');
        next();
        
    } catch (error) {
        res.status(401);
        throw new Error('unauthorised ,invalid token')
        
    }
}
else{
    res.status(401);
    throw new Error('unauthorised ,no token')
}
});

module.exports= protect; 