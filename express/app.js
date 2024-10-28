// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./connection/db.js"; 
import authRoutes from "./routes/routes.js";
import errorHandler from "./middleware/errorMiddleware.js";
import session from "express-session";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware for parsing cookies
app.use(cookieParser());

// Session middleware configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);
b
// Set up EJS as the templating engine
app.set("views", "views");
app.set("view engine", "ejs");

// Routes
app.use("/", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

(async () => {
  try {
    await connectDB();

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`🚀 Express server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error.message);
    process.exit(1); // Exit the process with a failure code if the connection fails
  }
})();
