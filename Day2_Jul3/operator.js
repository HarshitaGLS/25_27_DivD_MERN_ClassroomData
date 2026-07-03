
let username  //undefined or null
let userlogin = username ??  "Guest"
console.log(`Welcome ${userlogin}`)


let num1 = 3
let num2 = 2
// let result = num1 > num2 ? num2 : null
// let result = num1 > num2 && num2  //in react it is known as short circuit op
let result = num1 == num2 || num2  //in react it is known as short circuit op

console.log(result)