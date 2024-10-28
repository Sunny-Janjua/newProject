// controllers/authController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/jsonwebtoken.js";

/**
 * Render Signup Page
 */
export const renderSignup = (req, res) => {
  res.render("signup");
};

/**
 * Render Login Page
 */
export const renderLogin = (req, res) => {
  res.render("login");
};

/**
 * Handle User Signup
 */
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    req.flash("error_msg", "All fields are required.");
    return res.redirect("/signup");
  }

  try {
    // Check if user with the same username or email exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      req.flash("error_msg", "Username or email already exists.");
      return res.redirect("/signup");
    }

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password, // Password will be hashed by pre-save middleware
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const token = await generateToken({ id: newUser._id, username: newUser.username });

    // Save the token to the user's tokens array
    newUser.tokens.push(token);
    await newUser.save();

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      maxAge: 3600000, // 1 hour in milliseconds
    });

    req.flash("success_msg", "Registration successful. You are now logged in.");
    res.redirect("/dashboard");
  } catch (error) {
    console.error("Signup Error:", error);
    req.flash("error_msg", "Server error. Please try again later.");
    res.redirect("/signup");
  }
};

/**
 * Handle User Login
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    req.flash("error_msg", "All fields are required.");
    return res.redirect("/login");
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      req.flash("error_msg", "Invalid credentials.");
      return res.redirect("/login");
    }

    // Compare the password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      req.flash("error_msg", "Invalid credentials.");
      return res.redirect("/login");
    }

    // Generate JWT token
    const token = await generateToken({ id: user._id, username: user.username });

    // Save the token to the user's tokens array
    user.tokens.push(token);
    await user.save();

    // Set the token as a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      maxAge: 3600000, // 1 hour in milliseconds
    });

    req.flash("success_msg", "You are now logged in.");
    res.redirect("/dashboard"); // Redirect to a protected route upon successful login
  } catch (error) {
    console.error("Login Error:", error);
    req.flash("error_msg", "Server error. Please try again later.");
    res.redirect("/login");
  }
};

/**
 * Handle User Logout
 */
export const logout = async (req, res) => {
  const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    req.flash("error_msg", "You are not logged in.");
    return res.redirect("/login");
  }

  try {
    // Decode the token without verifying to get the user ID
    const decoded = jwt.decode(token);
    if (decoded && decoded.id) {
      const user = await User.findById(decoded.id);
      if (user) {
        // Remove the token from the user's tokens array
        user.tokens = user.tokens.filter((t) => t !== token);
        await user.save();
      }
    }

    // Clear the cookie
    res.clearCookie("token");

    req.flash("success_msg", "You have been logged out.");
    res.redirect("/login");
  } catch (error) {
    console.error("Logout Error:", error);
    req.flash("error_msg", "Server error. Please try again later.");
    res.redirect("/dashboard");
  }
};
