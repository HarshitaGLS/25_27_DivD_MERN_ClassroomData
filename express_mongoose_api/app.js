import express from "express"
import "dotenv/config"
import mongoose from "mongoose"

import userRoute from "./routes/userRoute.js"
import connectDB from "./config/dbconnect.js"

const PORT = process.env.PORT || 1400
const app = express()
app.use(express.json())
connectDB(process.env.MONGO_URI) // calling the connect db function

//http://localhost:3000/api
app.use("/api",userRoute)

app.listen(PORT, ()=>console.log(`server started at http://localhost:${PORT}`))