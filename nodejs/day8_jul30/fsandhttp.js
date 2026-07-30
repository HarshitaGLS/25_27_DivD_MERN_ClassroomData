import http from "http"
import "dotenv/config"
import fs from "fs"
const port = process.env.PORT || 1100
const server = http.createServer((req,res)=>{
    res.writeHead(201,{'content-type':"text/html"})
    fs.readFile("first.html","utf-8",(err,data)=>{
        if(err) throw err
        res.write(data)
        res.end()   
    }) 
})
server.listen(port,()=>console.log(`server started at http://localhost:${port}`))