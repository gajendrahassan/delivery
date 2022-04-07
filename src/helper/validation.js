const Valid = require('joi');


const deliverySchema = Valid.object({

    name:Valid.string().min(5)

})

module.exports = {
    deliverySchema,
  }
