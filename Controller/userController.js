// we import 2 things in controller 
// 1. user schema which we have created Schema folder .where we validate user through backend service eg
import userSchema from "../Schema/userSchema.js";
//2. Models ,which is the name of collection
import User from '../Model/userModel.js'

export const createUser = async (req, res) => {
    try {
        // Validate user data using Joi schema
        const validatedUser = await userSchema.validateAsync(req.body)
        // console.log("Validated User Data:", validatedUser); // Debug log
        const newUser = await new User({ ...validatedUser });
        await newUser.save();
      
        res.status(201).json({
            message: "user has created",
            user: newUser
        })

    } catch (err) {
        console.log(err.message);
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const userCollection = await User.find()
        res.status(200).json({
            collection: userCollection,
            message: "all users found successfully"
        })
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            error: error.message,
            message: "error fetching users"
        })


    }
}

