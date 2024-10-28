import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

const mongoose_uri = process.env.MONGOOSE_URI || "mongodb://127.0.0.1:27017/ejsdatabase";

async function connectDB() {
    try {
        await mongoose.connect(mongoose_uri);
        console.log("Mongoose server connected");
    } catch (error) {
        console.error("Mongoose connection error:", error.message);
    }
}

export default connectDB;
