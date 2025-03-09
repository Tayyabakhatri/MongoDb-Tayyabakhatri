import Joi from 'joi'

//Validation
const userSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(8).required(),
});
export default userSchema