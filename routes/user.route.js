import express from "express"
import { registerUser, ErrorTest } from "../controllers/user.controller.js";
const userRouter = express.Router();


userRouter.get("/register", registerUser);
export default userRouter