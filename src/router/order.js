const express = require('express')
const { createOrder } = require('../controller/order')
const router = express.Router()

// router.get('/delivery', getDelivery)


router.post('/order', createOrder)

module.exports = router 
