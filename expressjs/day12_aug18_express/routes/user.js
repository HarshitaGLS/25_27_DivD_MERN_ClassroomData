import express from "express"
const router =  express.Router()

// http://localhost:3000/api
router.get("/",(req,res)=>{
    res.send("get from userRoute")
})
// http://localhost:3000/api/user/1
router.get("/user/:uid",(req,res)=>{
    res.send(req.params)
})
// http://localhost:3000/api
router.post("/",(req,res)=>{
    res.send(req.body)
})
export default router