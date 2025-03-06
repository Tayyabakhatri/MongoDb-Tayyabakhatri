import mongoose from "mongoose";
// import 'dotenv/config'
import chalk from 'chalk'
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URL
if (!url) {
    console.error(chalk.white.bgRed("MONGODB_URL is not defined in .env file"));
    process.exit(1); // Exit process if URL is missing
}
const connectedToDb = async () => {
    try {
        await mongoose.connect(url)
        console.log(chalk.white.bgGreen("connected to MongoDB"))
    }
    catch (error) {
        console.log(chalk.white.bgGreen("error connecting to db", error));

    }
}

export default connectedToDb