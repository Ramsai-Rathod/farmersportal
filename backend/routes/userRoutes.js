const express =require('express');
const protect =require('../middlewares/authmiddleware') ;
const multer=require('multer');
const {loginuser,registeruser,updateuserprofile, userprofile,logoutuser, resetpasswordgmail,sendotp}  =require( '../controllers/userController')
const userrouter=express.Router();
const path=require('path');
userrouter.use(express.static('public'));
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userprofiles'),function(err,success){
            if(err){
                throw err;
            }
        });
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname;
        cb(null,name,function(err,success){
            if(err){
                throw err;
            }
        });
    }
});
const upload=multer({storage:storage});
userrouter.post('/login',loginuser);
userrouter.post('/register',registeruser);
userrouter.post('/reset-pass',resetpasswordgmail);
userrouter.post('/otp',sendotp);
userrouter.get('/logout',protect,logoutuser);
userrouter.get('/profile',protect,userprofile) ;
userrouter.get('/loggedin',(req,res)=>{
    if(req.cookies.jwt||req.body.token||req.headers["authorization"])
    res.status(200).send({data:true})
else
{
    res.status(200).send({data:false})
}
})
userrouter.put('/profile-update',upload.single('profile'),protect,updateuserprofile);
module.exports= userrouter; 
