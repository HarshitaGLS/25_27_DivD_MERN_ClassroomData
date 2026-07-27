export let sum = (a,b)=>a+b
export let sub = (a,b)=>a-b

let fact = (num)=>{
    if(num==1) return 1
    else return num*fact(num-1)
}

let str = "GLS University"

export default fact // default
// export {sum,sub} //named 
