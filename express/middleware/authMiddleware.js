// middleware/authMiddleware.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config({
  path: "./.env",
});

const publicKey = process.env.PUBLIC_KEY; // Assuming you have a PUBLIC_KEY for RS256

/**
 * Middleware to authenticate JWT tokens.
 */
export const authenticateToken = async (req, res, next) => {
  // Retrieve token from cookies or Authorization header
  const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    req.flash("error_msg", "No token provided. Please log in.");
    return res.redirect("/login");
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });

    // Find the user and verify the token exists in the database
    const user = await User.findById(decoded.id);
    if (!user) {
      req.flash("error_msg", "User not found.");
      return res.redirect("/login");
    }

    if (!user.tokens.includes(token)) {
      req.flash("error_msg", "Invalid token. Please log in again.");
      return res.redirect("/login");
    }

    // Attach user information to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    req.flash("error_msg", "Invalid token. Please log in again.");
    return res.redirect("/login");
  }
};
