import fs from "fs"
fs.writeFile("file1.txt","my first file",(err)=>{
    if(err) throw err
    console.log("File Written Successfully")
})
