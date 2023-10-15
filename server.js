import { app } from "./app.js";
import { connectDB } from "./utils/connect.js";
connectDB()
app.listen(process.env.PORT, ()=>{
    console.log(`App is Running at ${process.env.PORT}`)
})