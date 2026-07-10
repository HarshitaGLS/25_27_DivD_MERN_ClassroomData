let student = {fname:"Harshita",
    lname:"Maheshwari",
    "mobile no":98776656,
    isMarried:true , 
    getFullname:function(){
        return `My name is ${this.fname} ${this.lname}`
    }
}
// console.log(student);
console.log(student.getFullname());

console.log(student.fname);
console.log(student["mobile no"]);

// console.log(student["fname"]);

