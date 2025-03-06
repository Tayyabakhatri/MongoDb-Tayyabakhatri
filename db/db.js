import mongoose from "mongoose";
// import 'dotenv/config'
import chalk from 'chalk'
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URL
console.log(url);
const connectedToDb = async () => {
    try {
        await mongoose.connect(url)
        console.log(chalk.white.bgGreen("connected to MongoDB"))
    }
    catch (error) {
        console.log("error connecting to db", error);

    }
}

export default connectedToDb