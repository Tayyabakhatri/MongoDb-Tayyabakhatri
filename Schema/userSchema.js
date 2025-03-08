import Joi from 'joi'


// const userSchema = Joi.object({
//     username: Joi.string()
//         .alphanum()
//         .min(3)
//         .max(30)
//         .required(),

//     password: Joi.string()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
//     email: Joi.string()
//         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required
// })
// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) {
//     console.log(err);
// }



//Validation
const userSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(8).required(),
});
export default userSchema