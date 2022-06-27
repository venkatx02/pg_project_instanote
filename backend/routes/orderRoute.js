const express = require('express');
const router = express.Router()
const {createOrder, verifyOrder} = require('../controllers/orderController')


router.route('/orders').post(createOrder)
router.route('/verify').post(verifyOrder)


module.exports = router
