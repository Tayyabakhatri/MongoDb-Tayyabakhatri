import mongoose from "mongoose";
import chalk from "chalk";
import 'dotenv/config'

const url = process.env.MONGODB_URL;

const connectedToDb = async () => {
    try {
        await mongoose.connect(url);
        console.log(chalk.bgGreen.white("✅ Connected to MongoDB"));
    } catch (error) {
        console.error(chalk.bgRed.white("❌ Error connecting to MongoDB:"), error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

export default connectedToDb;
