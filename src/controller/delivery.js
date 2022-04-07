const Delivery = require('../model/delivery')
const { deliverySchema } = require('../helper/validation')
const createError = require('http-errors')
const { io } = require('../index')

exports.createDelivery = async (req, res, next)=>{

try {
    
    const result = await deliverySchema.validateAsync(req.body)


    const newDelivery = new Delivery(result)

    const delivery =    await newDelivery.save()

    res.send(delivery)

    

} catch (error) {

    let err = {

        message:error.details[0].message,
        status:406
    }


  next(res.status(406).send(err))
    
}


}


exports.getDelivery = async (req, res, next)=>{

   
    try {
        io.emit('order', {msg:"orders data"})

res.send('hellooooo')
    } catch (error) {
        
    }
    
    }