
let a =20 //global var
function fun1(){
    let b=1 //local variable
    for(let i=1;i<=10;i++){}
    console.log(a+b) //21
    console.log(`i value = ${i}`); //error block scope 
        
}
fun1()
console.log(b)