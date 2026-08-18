import express from "express"
import "dotenv/config"
const PORT = process.env.PORT || 1200

const app =  express()
//http://localhost:3000
app.get("/",(req,res)=>{
    res.send("hello from expressjs")
})
//http://localhost:3000/course/1001
app.get("/course/:id",(req,res)=>{
    let pattern = /^\d+$/
    if(pattern.test(req.params.id)){
         res.send(req.params)
    }  
    else res.send("Should be numeric")
})


app.listen(PORT,()=>console.log(`server started ar http://localhost:${PORT}`))
