import express from "express";
import { SignupForm, SignupUser, getUsers, getUserById, updateUser, deleteUser } from "../controller/authController.js";

const route = express.Router();
route.get("/", SignupForm);
route.post("/signup", SignupUser);
route.get("/users", getUsers);
route.get("/users/:id", getUserById);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);

export default route;
