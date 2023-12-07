const express=require('express');
const router=express.Router();
const protect=require('../middlewares/authmiddleware');
const controller=require('../controllers/cartcontroller')
router.get('/cart-val',protect,controller.getcart);
router.route('/cart-val/:id')
.post(protect,controller.addProductToCart)
.delete(protect,controller.removeProductFromCart);
module.exports=router;