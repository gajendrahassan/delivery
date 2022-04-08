// const Order = require('../model/Order')
const { OrderSchema } = require('../helper/validation')
const createError = require('http-errors')
const { io } = require('../index')

exports.createOrder = async (req, res, next)=>{

try {
    
    const result = await OrderSchema.validateAsync(req.body)



    // const neworder = new Order(result)

    // const order =    await new Order.save()

    res.send(result)

    

} catch (error) {

    let err = {

        message:error.message,
        status:406
    }


  next(err)
    
}


}


exports.getOrder = async (req, res, next)=>{

   
    try {
        io.emit('order', {msg:"orders data"})

res.send('hellooooo')
    } catch (error) {
        
    }
    
    }