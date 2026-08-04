import fs from 'fs'

// fs.copyFile('file1.txt','./newdir/myfile.txt',(err)=>{
//     if(err) throw err
//     console.log("file copied")
// })

// fs.rename('./newdir/myfile.txt','./newdir/renamedfile.txt',(err)=>{
//     if(err) throw err
//     console.log("file renamed")
// })

// fs.unlink('./newdir/renamedfile.txt',(err)=>{
//     if(err) throw err
//     console.log("file deleted")
// })
 
  fs.open('day9_aug3.txt', 'a', 777, ( e, id )=> {
    fs.write(id,"opened using open - Write using write function",null,'utf-8',()=>{
        fs.close(id,()=>{console.log("file written successfully")})
    })
})












