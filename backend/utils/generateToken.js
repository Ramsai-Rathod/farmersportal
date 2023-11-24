const jwt=require('jsonwebtoken');

const generateToken=(res,userId)=>{
const token=jwt.sign({userId},'ramsai@',{expiresIn:'30d'});
res.cookie('jwt',token,{httpOnly:true,
    sameSize:'strict',
    maxAge:30*24*60*60*1000,
});
};
module.exports=generateToken;