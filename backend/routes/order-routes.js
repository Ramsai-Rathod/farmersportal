const express=require('express');
const router=express.Router();
const protect=require('../middlewares/authmiddleware');
const controller=require('../controllers/ordercontroller')
router.use(protect);
router.get('/order-details',controller.Getorders);
router.post('/create-order',controller.CreateOrder);
router.route('/order/:id')
.delete(controller.Deleteorder);
module.exports=router;