const Joi = require ('joi')

const userSchema = Joi.object({
    email: Joi.any(),
    phone: Joi.any(),
    password: Joi.any(), 
    firstName: Joi.any(),
    lastName: Joi.any(), 
})

export default userSchema;