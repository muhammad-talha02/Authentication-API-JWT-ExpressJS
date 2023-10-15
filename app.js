import dotenv from 'dotenv'
dotenv.config()
import express from "express"
import cors from "cors"
export const app = express();
import userRouter from "./routes/user.route.js"
import ErrorMiddleware from './middlewares/ErrorMiddleware.js';

// Cors

app.use(cors())

// JSON FOrmat

app.use(express.json())


// Routes

app.use("/api/user" , userRouter)

// Error Middlewares

app.use(ErrorMiddleware)