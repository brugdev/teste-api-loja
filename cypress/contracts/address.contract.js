const Joi = require ('joi')

const addressSchema = Joi.object({
    name: Joi.any(),
    phone: Joi.any(),
    address: Joi.any(), 
    city: Joi.any(),
    state: Joi.any(),
    zipCode: Joi.any(),
})

export default addressSchema;