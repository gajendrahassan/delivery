const { string } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DeliverSchema = new Schema({

name: {
     type:String,
     required:true,
},

delivery_id:String,

current_loc: {

     lat:String,
     lng:String
}

})


const Delivery = mongoose.model('delivery', DeliverSchema)
module.exports = Delivery