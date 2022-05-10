const express = require('express')
const { createDelivery, getDelivery, getDeliveryUpdate, getDeliveryDelete } = require('../controller/delivery')
const router = express.Router()

router.get('/delivery/:id', getDelivery)
router.post('/delivery', createDelivery)
router.put('/delivery/:id', getDeliveryUpdate)
router.delete('/delivery/:id', getDeliveryDelete)


module.exports = router 
