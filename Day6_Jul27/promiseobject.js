/* let count = 21

//create promise 
let p = new Promise((resolve,reject)=>{
    if(count >=20) resolve()
    else reject()
})

//consume promise
p.then(()=>{ console.log("Promise is resolved")})
 .catch(()=> console.log("Promise is rejected")) */

/*
 let count = 2
//create promise 
let p = new Promise((resolve,reject)=>{
    if(count >=20) resolve(count)
    else reject("Error")
})
//consume promise
p.then((c)=>{ console.log(`Promise is resolved\n count is ${c}`)})
 .catch((err)=> console.log(err)) */


/* let count = 30
//create promise 
let p = new Promise((resolve,reject)=>{
    if(count >=20) resolve({str:"Resolve",count:count})
    else reject("Error")
})
//consume promise
p.then((c)=>{ console.log(`Promise is resolved\n count is ${c.count}`)})
 .catch((err)=> console.log(err)) */


  let count = 30
//create promise 
let p = new Promise((resolve,reject)=>{
    if(count >=20) {
        resolve(count)
        resolve("erjk")
        resolve(23)
    }
    else reject("Error")
})
//consume promise
p.then((c)=>{ console.log(`Promise is resolved\n count is ${c}`)})
 .catch((err)=> console.log(err))
 .finally(()=>console.log("promise concept clear"))