// import mongoose from "mongoose";
// // import 'dotenv/config'
// import chalk from 'chalk'
// import dotenv from 'dotenv';
// dotenv.config();
// // import 'dotenv/config'

// const url = process.env.MONGODB_URL
// const connectedToDb = async () => {
//     try {
//         await mongoose.connect(url)
//         console.log(chalk.white.bgGreen("connected to MongoDB"))
//     }
//     catch (error) {
//         console.log(chalk.white.bgGreen("error connecting to db", error));

//     }
// }

// export default connectedToDb

import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;

const connectedToDb = async () => {
    try {
        if (!url) {
            throw new Error("MONGODB_URL is not defined. Check your .env file.");
        }

        await mongoose.connect(url);

        console.log(chalk.bgGreen.white("✅ Connected to MongoDB"));
    } catch (error) {
        console.error(chalk.bgRed.white("❌ Error connecting to MongoDB:"), error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

export default connectedToDb;
