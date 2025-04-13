import mongoose from "mongoose";
import chalk from "chalk";
import 'dotenv/config'

const url = process.env.MONGODB_URL;

const connectedToDb = async () => {
    // mongoose.connection.on("connected", () => console.log("✅ DB Connected"));

    try {

        await mongoose.connect(url, { dbname: "ecommerce" });
        console.log(chalk.bgBlue.white("✅ Connected to MongoDB"));
    } catch (error) {
        console.error(chalk.bgRed.white("❌ Error connecting to MongoDB:"), error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

export default connectedToDb;
