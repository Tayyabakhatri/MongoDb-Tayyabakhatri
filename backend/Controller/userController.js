// we import 2 things in controller 
// 1. user schema which we have created Schema folder .where we validate user through backend service eg
import userSchema from "../Schema/userSchema.js";
//2. Models ,which is the name of collection
import User from '../Model/userModel.js'
import bcrypt from 'bcrypt'
import chalk from "chalk";
import jwt from 'jsonwebtoken'
import 'dotenv/config'


//create user
const createUser = async (req, res) => {
    try {
        console.log("received body", req.body);


        const validatedUser = await userSchema.validateAsync(req.body)
        const password = bcrypt.hashSync(validatedUser.password, 10)

        const newUser = await new User({ ...validatedUser, password: password });
        await newUser.save();


        res.status(201).json({
            message: "user has created",
            user: newUser
        })

    } catch (err) {
        if (err?.code === 11000) {
            return res.status(409).json({
                message: "this email is in use",
                error: err.message
            })
        }
        res.status(500).json({
            message: "internal server error ",
            error: err.message
        })
    }
}
//get allusers
const getAllUsers = async (req, res) => {
    try {
        const userCollection = await User.find()
        res.status(200).json({
            collection: userCollection,
            message: "all users found successfully"
        })
    } catch (error) {
        console.error(chalk.bgBlue.white(error.message));

        res.status(500).json({
            error: error.message,
            message: "error fetching users"
        })

    }
}

//update users

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const updateUser = await User.findOneAndUpdate({ id: id, }, { ...res.body }, { new: true }) //id se us id pr jaiga jo db se generate howi he ,us ka sara data delete kry ga ,ur phir new data la kr dega 
        if (!updateUser) {
            res.status(404).json({
                message: "user not found"
            })
        }
        res.send({
            user: updateUser,
            message: "userUpdated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error", error
        })
    }
}
//delete user 
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = User.findOneAndDelete(id)
        if (!deleteUser) {
            return res.status(404).json({
                message: "user not found",
            })
        }
        res.send({
            deleteId: id,
            message: "user deleted"
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error", error
        })
        console.log(chalk.bgBlue.white(error));

    }
}

//getting one user
const loginUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            console.log(chalk.bgCyan.blue("email or password not found"));

            return res.status(400).json({
                success: false,
                message: "enter correct credentials"
            })
        }

        //first validating through email
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            })
        }
        //then match pasword
        const compare = await bcrypt.compare(req.body.password, user.password)
        if (!compare) {
            return res.status(401).json({
                success: false,
                message: "unauthorized user"
            })
        }

        var token = jwt.sign({ ...user }, process.env.JWT_SECRETKEY)
        console.log(chalk.bgBlue.white(token));

        res.status(200).json({
            success: true,
            message: "user Sign in",
            user: user.id,
            token,
            role:user.role
        })
    } catch (error) {
        console.log(chalk.bgRed.white(error));
        res.status(500).json({ message: "Internal server error", error });
    }
}

const isAdmin = async (req, res) => {
    try {
        console.log(req.user);
        
        const { role, id } =  req.user
        console.log("🔹 Checking admin status for:", id, role);
        if (role !== "admin") {
            console.log(chalk.bgRed.yellow('user is not an admin'));
            return res.status(404).json({
                success: false,
                message: "Unauthorized(not an admin)",
                isAdmin: false
            })

        }
        console.log(chalk.bgBlue.yellow(`user is an admin ,user ID is  ${id} user Role is ${role}`));
        return res.status(200).json({
            success: true,
            message: "user is an admin",
            isAdmin: true,
            role:"admin"
        })


    } catch (error) {
        console.log(chalk.bgWhite.black(error.message));
        return req.status(500).json({
            message: "internal server error"
        })
    }
}



export { deleteUser, createUser, loginUser, updateUser, getAllUsers, isAdmin }
