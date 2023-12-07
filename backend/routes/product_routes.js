const express=require('express');
const router=express.Router();
const protect=require('../middlewares/authmiddleware');
const{getproduct,updateproduct,addproduct,deleteproduct,showProducts}=require('../controllers/productController');
const path=require('path');
const multer=require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/productimages'),function(err,success){
            if(err){
                throw err;
            }
        });
    },
    filename:function(req,file,cb){
        // console.log(file.originalname);
        // console.log(file.name);
        const name=Date.now()+'-'+file.originalname;
        cb(null,name,function(err,success){
            if(err){
                throw err;
            }
        });
    }
});
const upload=multer({storage:storage});
router.route('/farm-product').post(protect,upload.array('productimages'),addproduct).get(protect,getproduct)
router.route('/farm-product/:id',protect).put(updateproduct)
.delete(deleteproduct)
router.get('/user-products',showProducts)
module.exports=router;