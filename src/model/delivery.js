const { string } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeliverSchema = new Schema({

name:String,
phone:String,
delivery_id:String,
isAvailaible:Boolean,
isActive:Boolean,
status:Boolean,
location: {

     coordinates:[Number],
     type:{
          type:String,
          enum: ['Point'],
          default:'Point'
     }
}

})


DeliverSchema.index({ location: "2dsphere" });


const Delivery = mongoose.model('delivery', DeliverSchema)
module.exports = Delivery