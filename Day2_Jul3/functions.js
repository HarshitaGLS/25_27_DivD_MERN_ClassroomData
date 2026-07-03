// functions - 
// 1 regular function
// 2 function expression
// 3 arrow function

let num1 = 2
let num2 = 4
// fun1()
// function fun1(){ console.log(num1+num2) }
// fun1()

//function expression
// var fun2 
// console.log(fun2())
// var fun2 = function(){console.log(num1+num2)}
// console.log(fun2())


//arrow function
// let fun3 = () => console.log(num1+num2)

// let fun4 = () => { 
//     let a = 3
//     let b = 2
//     return a+b
// }
// console.log(fun4())

let fun5 = (num1,num2) => {return num1+num2}
console.log(fun5(10,20))
let fun6 = (num1,num2) => num1+num2



