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

        message:error.message,
        status:406
    }


  next(err)
    
}


}

exports.getDelivery = async (req, res, next)=>{

   
    try {

        // io.emit('order', {msg:"orders data"})

        const delivery = await Delivery.findById(req.params.id)

         if(!delivery){

            let err = {

                message:'Delivery Patner Not Found!',
                status:404
            }
        
        
          next(err)

         } else {

            res.status(201).send(delivery)

         }


    } catch (error) {
        
        let err = {

            message:error.message,
            status:406
        }
    
    
      next(err)
    }
    
    }

exports.getDeliveryUpdate = async (req, res, next)=>{

   
    try {
        const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body)

        if(!delivery){

           let err = {

               message:'Delivery Patner Not Found!',
               status:404
           }
       
       
         next(err)

        } else{

            res.status(201).send({msg:"Delivery Patner Updated Succefully!"})

        }


        

    } catch (error) {
        let err = {

            message:error.message,
            status:406
        }
    
    
      next(err)
    
    }
    
    }





 exports.getDeliveryDelete = async (req, res, next)=>{

try {

    const delivery = await Delivery.findByIdAndDelete(req.params.id)

    if(!delivery){

       let err = {

           message:'Delivery Patner Not Found!',
           status:404
       }
   
   
     next(err)

    } else{

        res.status(201).send({msg:"Delivery Patner Deleted Succefully!"})

    }
    
} catch (error) {
    let err = {

        message:error.message,
        status:406
    }


  next(err)

}


    }


 exports.getDeliveryDelete = async (req, res, next)=>{

try {

    const delivery = await Delivery.findByIdAndDelete(req.params.id)

    if(!delivery){

       let err = {

           message:'Delivery Patner Not Found!',
           status:404
       }
   
   
     next(err)

    } else{

        res.status(201).send({msg:"Delivery Patner Deleted Succefully!"})

    }
    
} catch (error) {
    let err = {

        message:error.message,
        status:406
    }


  next(err)

}


    }