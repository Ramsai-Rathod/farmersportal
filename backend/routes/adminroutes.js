const protect = require('../middlewares/authmiddleware');

const router=require('express').Router();


router.use(protect)
router.get('/get-users',getusers);