import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"


const PORT = process.env.PORT || 1200

const app =  express()
app.use(express.json()) 


// http://localhost:3000/api
app.use("/api",userRoute)

// http://localhost:3000/
app.use("/",productRoute)

app.listen(PORT,()=>console.log(`server started ar http://localhost:${PORT}`))
