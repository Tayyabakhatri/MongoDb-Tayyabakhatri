import jwt from 'jsonwebtoken'
import 'dotenv/config';


const authentication = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    } else {
        try {
            const token = req.headers.authorization.trim().split(' ')[1]
            console.log(token);
            console.log("-->Token type ",typeof token);
            const decoded = jwt.verify(token,process.env.JWT_SECRETKEY);
            console.log(decoded);
            console.log(decoded._doc.userName);
            
            
         } 
        catch(error) { 
            console.log(error.message);
            
        }
    }
    next()
}
export default authentication