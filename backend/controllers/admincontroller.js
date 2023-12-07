const handler=require('express-async-handler')
const User = require('../models/userModels')


const getusers=handler(async(req,res)=>{
    const users=await User.find({});
    if(users){
      return res.status(200).send(users)
    }
    else{
        return res.status(400).send("data can't be retrived");
    }
})
const getproducts=(req,res)=>{
    
}