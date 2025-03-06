// we import 2 things in controller 
// 1. user schema which we have created Schema folder .where we validate user through backend service eg
import userSchema from "../Schema/userSchema.js";
//2. Models ,which is the name of collection
import User from '../Model/userModel.js'

const createUser = async (req, res) => {
    try {
        const validatedUser = await userSchema.validateAsync(req.body)
        console.log("Validated User Data:", validatedUser); // Debug log
        const newUser =await  new User(validatedUser) //userData in a name of collection 
        await newUser.save()
        res.status(201).json({
            user: newUser,
            message: "user created successfully"
        })

    } catch (error) {
        res.status(500).json({
            error: error.details?error.details[0].message : error.message,
        })

    }
}
export  {
    createUser
}


