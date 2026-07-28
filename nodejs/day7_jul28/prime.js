//number divisible by 1 and itself
let checkprime = (num)=>{   
    let flag = true
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag = false 
            break
        }
    }
    if(flag) return `${num} is a prime number`
    else return `${num} is not a prime number`
}

console.log(checkprime(10))
