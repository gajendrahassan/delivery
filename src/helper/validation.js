const Valid = require('joi');


const deliverySchema = Valid.object({

    name:Valid.string().min(15),
    address: Valid.string(),
    phone:Valid.string(),
    delivery_id:Valid.string(),
    isAvailaible:Valid.boolean(),
    isActive:Valid.boolean(),
    current_loc:Valid.object({
        lng:Valid.string(),
        lat:Valid.string(),
    }),
    status:Valid.boolean()
   
    



})

const OrderSchema = Valid.object({


    order_id:Valid.string().required(),

    oerder_details: Valid.object({

        food_items:Valid.array().items(Valid.object({

            item_name:Valid.string().required(),
            item_price:Valid.string().required(),
            quantity:Valid.string().required(),
            weight:Valid.string().required(),
            volume:Valid.string().required(),
            discount:Valid.string().required(),
            vat:Valid.string().required(),
    
    
        })) ,
    
        package_charges:Valid.string().required(),
        total_amount:Valid.string().required(),


    }),
    customer_details: Valid.object({

        customer_name:Valid.string().required(),
        customer_phone:Valid.string().required(),
        customer_adress:Valid.string().required(),
        customer_id:Valid.string().required(),
    }),
    restuarent_details: Valid.object({

        restuarant_name:Valid.string().required(),
        restuarant_id:Valid.string().required(),
        restuarant_adress:Valid.string().required(),
        restuarant_loc:Valid.object({
            lng:Valid.string(),
            lat:Valid.string()
        })

    })
   
   
 
        



    
})

module.exports = {
    deliverySchema,
    OrderSchema
  }
