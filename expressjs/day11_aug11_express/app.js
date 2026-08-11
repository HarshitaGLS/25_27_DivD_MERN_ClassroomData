import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT || 3000

const server = express()

server.get("/",(req,res)=>{
    res.send("Express get api called")
})
server.get("/course",(req,res)=>{
    //req.query = {name:"mscit",sem:3}
    res.send(`course api called - ${JSON.stringify(req.query)}`)
})
// Capture a numeric id from the path
server.get(/^\/course\/([0-9]+)$/, (req, res) => {
  const id = req.params[0];   // “123” from /course/123
  res.send(`Path id is ${id}`);
});
// server.get("/^\/id\/(\d+)$/, ",(req,res)=>{
//     res.send(`Course ID = ${req.params.id}`)
// })
server.get("/dept/:deptno",(req,res)=>{
    //req.params =  query parameter
    res.send(`Department no = ${req.params.deptno}`)
})
server.get("/dept/:dno/:dname",(req,res)=>{
    //req.params =  query parameter
    res.send(`Department Details= ${JSON.stringify(req.params)}`)
})

server.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))
