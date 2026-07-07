let arr = [3,4,6,7,9, "rhejhr",true,2.3]

let arr1 = new Array(3,4,5,7,8)

// console.log(arr1.length);  //5 index 0 to 4
// console.log(typeof arr1); //Object
// console.log(arr instanceof Array);  //true 
// console.log(arr instanceof String);  //false 
// console.log(arr1[3]); //7
// console.log(arr1[6]); //undefined
// console.log(arr1[-1]); //undefined
// for(let i=0;i<arr1.length;i++){ console.log(arr1[i])}
// for(let val of arr1){ console.log(val)}

arr1.push(102,45) //7
console.log(arr1); //3,4,5,7,8,102,45
arr1.unshift(8,7,6); //8,7,6,3,4,5,7,8,102,45
arr1.pop() // 45
arr1.shift() //8 
console.log(arr1); //7,6,3,4,5,7,8,102
arr1.splice(4,2) // index, deletedcount 
console.log(arr1)//7,6,3,4,8,102
arr1.splice(2,1,20,30,40,50) // index, deletedcount  insert
console.log(arr1)//7,6,20,30,40,50,4,8,102
console.log(arr1.slice(2,7)); // last index exclude (2 to 6)
// 20,30,40,50,4
console.log(arr1.slice(4));// 4 to end  40,50,4,8,102
console.log(arr1.slice(-4));// -4 to end  50,4,8,102
console.log(arr1.slice(-4,-2)); //50,4
console.log(arr1.slice(-2,-4)); // []




















