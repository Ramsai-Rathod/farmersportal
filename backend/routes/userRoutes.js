const express =require('express');
const protect =require('../middlewares/authmiddleware') ;
const {loginuser,registeruser,updateuserprofile, userprofile,logoutuser, resetpasswordgmail}  =require( '../controllers/userController')
const userrouter=express.Router();
userrouter.post('/login',loginuser);
userrouter.post('/register',registeruser);
userrouter.post('/reset-pass',resetpasswordgmail);
userrouter.get('/logout',logoutuser);
userrouter.route('/profile/:id') 
.get(protect,userprofile)
.put(protect,updateuserprofile);
module.exports= userrouter; 
