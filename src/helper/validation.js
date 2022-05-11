const Valid = require('joi');


const deliverySchema = Valid.object({

    name:Valid.string().min(2),
    phone:Valid.string(),
    delivery_id:Valid.string(),
    isAvailaible:Valid.boolean(),
    isActive:Valid.boolean(),
    location:Valid.object({
        coordinates:Valid.array(),
    }),
    status:Valid.boolean()
   
    



})

const OrderSchema = Valid.object({


    order_id:Valid.string().required(),

    restuarent_details: Valid.object({

        restuarant_name:Valid.string().required(),
        restuarant_id:Valid.string().required(),
        location:Valid.object({
            coordinates:Valid.array(),
        }),

    })
   
   
 
        



    
})

module.exports = {
    deliverySchema,
    OrderSchema
  }
