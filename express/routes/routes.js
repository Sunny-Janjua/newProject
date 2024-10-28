// routes/routes.js
import express from "express";
import { renderSignup, renderLogin, signup, login, logout } from "../controllers/authController.js";
import dashboardRoutes from "./dashboard.js";

const authRoutes = express.Router();

// Home Route
authRoutes.get("/", (req, res) => {
  res.render("home"); // Create a 'home.ejs' view
});

// Signup Routes
authRoutes.get("/signup", renderSignup);
authRoutes.post("/signup", signup);

// Login Routes
authRoutes.get("/login", renderLogin);
authRoutes.post("/login", login);

// Logout Route
authRoutes.get("/logout", logout);

// Dashboard Routes
authRoutes.use("/", dashboardRoutes);

export default authRoutes;
