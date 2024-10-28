import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection/connection.js";
import route from "./routes/authRoute.js";

dotenv.config({
    path: "./.env"
});

const portName = process.env.PORT_NAME || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

(async () => {
    try {
        await connectDB();
        await app.listen(portName, () => {
            console.log(`Express Server started on port ${portName}`);
        });
    } catch (error) {
        console.log("Express Server Error:", error.message);
    }
})();
