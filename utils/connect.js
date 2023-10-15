import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const DB_OPTIONS = {
            dbName :"jwt"
        }
        await mongoose.connect(process.env.DB_URL, DB_OPTIONS);
        console.log("Connected Successfully")
    } catch (error) {
        console.log("Database Not Conncted", error)
    }
}
// mongoose.connect()