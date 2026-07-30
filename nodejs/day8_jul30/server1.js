import http from "http"
let port = 1200
const server = http.createServer((req,res)=>{
    // res.writeHead(201,{'content-type':"text/html"})
    res.writeHead(201,{'content-type':"application/json"})
    res.write("Hello from nodejs")
    res.end()   
})

server.listen(port,()=>console.log(`server started at http://localhost:${port}`))