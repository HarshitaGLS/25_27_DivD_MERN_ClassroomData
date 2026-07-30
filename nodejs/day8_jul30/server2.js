import http from "http"
import "dotenv/config"
import checkPrime from "./prime.js"

const port = process.env.PORT || 1100
const server = http.createServer((req,res)=>{
    res.writeHead(201,{'content-type':"application/json"})
    let obj = {rollno:101,name:"Ram",isActive:false}
    res.write(JSON.stringify(obj))
    res.write(`\n ${checkPrime(13)}`)
    res.end()   
})
server.listen(port,()=>console.log(`server started at http://localhost:${port}`))