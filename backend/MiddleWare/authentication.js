import jwt from 'jsonwebtoken'
import 'dotenv/config';
import User from '../Model/userModel.js'
import chalk from 'chalk'


const authentication = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    } else {
        try {
            const token = req.headers.authorization.trim().split(' ')[1]
            console.log(token);
            console.log("-->Token type ", typeof token);
            const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
            console.log(decoded);
            console.log(decoded._doc.userName);

            //check if user exist 
            const user = await User.findById(decoded._doc._id)
            console.log(chalk.bgGreen.red("database user --->", user));
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "Unauthorized,Token expired"
                })
            }
            req.user = { id: user._id.toString(), role: user.role }


            next()

        }
        catch (error) {
            console.log("authentication problem", error.message);
            return res.status(401).json({
                success: false,
                message: 'Please authenticate using a valid token',
            })

        }
    }
}
export default authentication