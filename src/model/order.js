const mongoose = require('mongoose')
const Schema = mongoose.Schema


const OrderSchema = new Schema({

    order_id:String,

    restuarent_details:{

        restuarant_name:String, 
        restuarant_id:String, 
        location:{
            coordinates:[Number],
            type:{
                 type:String,
                 enum: ['Point'],
                 default:'Point'
            }
 
        }, 

 
    }

})

// Order.index({ location: "2dsphere" });

const Order = mongoose.model('order', OrderSchema)
module.exports = Order




    // oerder_details:{

    //     food_items:[{
    //         item_name:String,
    //         item_price:String,
    //         quantity:String,
    //         weight:String,
    //         volume:String,
    //         discount:String,
    //         vat:String,
    //     }],
    //     package_charges:String, 
    //     total_amount:String, 

    // },
    // customer_details:{
    //     customer_name:String,
    //     customer_phone:String, 
    //     customer_adress:String, 
    //     customer_id:String, 
 


    // },