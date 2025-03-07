
import mongoose from "mongoose";

const databaseUserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
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