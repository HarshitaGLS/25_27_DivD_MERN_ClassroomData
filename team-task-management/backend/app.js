import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
// Authentication routes
app.use("/api/auth", authRoutes)


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Team Task Management API is running"
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`)
})