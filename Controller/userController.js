// we import 2 things in controller 
// 1. user schema which we have created Schema folder .where we validate user through backend service eg
import userSchema from "../Schema/userSchema.js";
//2. Models ,which is the name of collection
import User from '../Model/userModel.js'

const createUser = async (req, res) => {
    //     try {
    //         const validatedUser = await userSchema.validateAsync(req.body)
    //         console.log("Validated User Data:", validatedUser); // Debug log
    //         const newUser =await  new User(validatedUser) //User in a name of collection 
    //         await newUser.save()
    //         res.status(201).json({
    //             user: newUser,
    //             message: "user created successfully"
    //         })

    //     } catch (error) {
    //         res.status(500).json({
    //             error: error.details?error.details[0].message : error.message,
    //         })

    //     }
    // }


        try {
            // Validate user data using Joi schema
            const validatedUser = await userSchema.validateAsync(req.body)
            // console.log("Validated User Data:", validatedUser); // Debug log
            const user =await new User(validatedUser);
            const savedUser = await user.save();
        return  res.status(201).json(savedUser);
            

        } catch (err) {
            console.log(err);
        }
        // {
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password,
        // }

        // try {
        //     const savedUser = await user.save();
        //     res.send(savedUser);
        // } catch (error) {
        //     res.send(error);
        // }




    // try {
    //     const validatedUser = await userSchema.validateAsync(req.bady)
    //     const user = await new User(validatedUser)
    //     await user.save()
    //     return  res.status(201).json({ message: "User created successfully", user });
    // } catch (error) {
    //     return res.status(500).json({ message: "Server error", error: error.message });
    // }
}

const getAllUsers = async (req, res) => {
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
export { createUser, getAllUsers }
