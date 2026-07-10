/*let arr = [2,3,5]
// let arr1 = [arr] //[[2,3,5]]
let arr1 = [...arr] //[2,3,5]  // spread operator
arr1.push(6) //[2,3,5,6]
console.log(arr);
console.log(arr1); */

///////////////////////
let student = {
    fname:"Harshita",lname:"Maheshwari",mobile:98776656,isMarried:true }
let faculty = {...student,fname:"Ram",subjects:[]} // spread 

faculty.experience =12
