import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/Errorhandler.js";


export const ErrorTest = (req, res, next) => {
  next(new ErrorHandler("URL Error bhai", 500));
};
export const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, tc } = req.body;
});
