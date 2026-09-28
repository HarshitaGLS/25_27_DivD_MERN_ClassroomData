import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import projectRoutes from "./routes/projectRoutes.js"
import issueRoutes from "./routes/issueRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Team Task Management API is running"
  })
})

app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/issues", issueRoutes)
app.use("/api/comments", commentRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`)
})