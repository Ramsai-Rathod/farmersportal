const express=require('express');
const router=express.Router();
const protect=require('../middlewares/authmiddleware');
const{getproduct,updateproduct,addproduct,deleteproduct,showProduct,showProducts}=require('../controllers/productController');
router.use(protect);
router.route('/farm-product').post(addproduct)
.get(getproduct)
router.route('/farm-product/:id').put(updateproduct)
.delete(deleteproduct)
router.get('/user-products',showProducts)
router.get('/user-product/:id',showProduct)
module.exports=router;