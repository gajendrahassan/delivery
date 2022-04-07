const express = require('express')
const { createDelivery, getDelivery } = require('../controller/delivery')
const router = express.Router()

router.get('/delivery', getDelivery)


router.post('/delivery', createDelivery)

module.exports = router 
