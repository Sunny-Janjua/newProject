import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})

const mongoose_uri=process.env.MONGOOSE_URI || ' mongodb://127.0.0.1:27017/mongooseuri'

async function connectDB() {
    try {
        await mongoose.connect(mongoose_uri)
        console.log(`Mongoose Connected on ${mongoose_uri}`)
    } catch (error) {
        console.log("Mongoose Connection Error")
    }
    
}

export default connectDB;