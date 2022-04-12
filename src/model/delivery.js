const { string } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeliverSchema = new Schema({

name:String,
address:String,
phone:String,
delivery_id:String,
isAvailaible:Boolean,
isActive:Boolean,
status:Boolean,
current_loc: {

     lat:String,
     lng:String
}

})


const Delivery = mongoose.model('delivery', DeliverSchema)
module.exports = Delivery