
//destructuring assignment 
let arr =[2,3,5,6,7,8]
// let a = arr[0]
// let b = arr[1]
// let [a,b,c] = arr //a= 2, b=3, c=5
// let [x,y,,z] = arr //x= 2, y=3, z=6
//  let [x,y,,,,,z] = arr //x= 2, y=3, z= undefined
let [p,q,...r] = arr //p=2 ,q=3 r =[5,6,7,8] //rest parameter

let student = {
    fname:"Harshita",lname:"Maheshwari",mobile:98776656,isMarried:true }
// let {fname,mobile} = student
// console.log(fname)
// console.log(lname)
let {fname:fn,mobile} = student
let {fname,...remaining} = student //fname="Harshita" 
//remaining = { lname:"Maheshwari", mobile:98776656, isMarried:true }




