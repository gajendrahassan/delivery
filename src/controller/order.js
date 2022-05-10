const Order = require('../model/order')
const { OrderSchema } = require('../helper/validation')
const createError = require('http-errors')
const { io } = require('../index')

exports.createOrder = async (req, res, next)=>{

try {
    
    const result = await OrderSchema.validateAsync(req.body)



    const neworder = new Order(result)

                    await neworder.save()

    res.send({msg:"order saved succufully!"})

    

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


        // .find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [ 77.4485783, 12.9794457 ] }} } })

        io.emit('order', {msg:"orders data"})

res.send('hellooooo')
    } catch (error) {
        
    }
    
    }