
import mongoose from "mongoose";

const databaseUserSchema = mongoose.Schema({
    username: {
        require: true,
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})
const User = mongoose.model("Users",databaseUserSchema)

export default User