const express =require('express');
const protect =require('../middlewares/authmiddleware') ;
const {loginuser,registeruser,updateuserprofile, userprofile,logoutuser}  =require( '../controllers/userController')
const userrouter=express.Router();
userrouter.post('/login',loginuser);
userrouter.post('/register',registeruser);
userrouter.get('/logout',logoutuser);
userrouter.route('/profile/:id') 
.get(protect,userprofile)
.put(protect,updateuserprofile);
module.exports= userrouter; 
