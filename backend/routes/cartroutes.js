const express=require('express');
const router=express.Router();
const protect=require('../middlewares/authmiddleware');
const controller=require('../controllers/cartcontroller')
router.use(protect);
router.get('/cart-val',controller.getcart);
router.route('/cart-val/:id')
.post(controller.addProductToCart)
.delete(controller.removeProductFromCart);
module.exports=router;