import fs from 'fs/promises'

// fs.readFile("day9_aug3.txt","utf-8",(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// fs.readFile("day9_aug3.txt","utf-8")
//   .then((data)=>console.log(data))
//   .catch(err=>console.log(`Rejectee ${err}`))

// try{
// let data = await fs.readFile("day9_aug3.txt","utf-8")
// console.log(data)
// }
// catch(err){
//     console.log(err)
// }


// async function fun(){
// let fun = async function(){
let fun = async ()=>{
    try{
    let data = await fs.readFile("day9_aug3.txt","utf-8")
    console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
fun()

