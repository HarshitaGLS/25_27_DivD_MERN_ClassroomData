import express from "express"
import "dotenv/config"
import indexRoute from "./routes/indexRoute.js"
import connectDB from "./config/dbconfig.js"

const PORT  = process.env.PORT || 1200

const app = express()
connectDB(process.env.MONGO_URI)

app.use(express.json())
app.use("/",indexRoute)

app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))