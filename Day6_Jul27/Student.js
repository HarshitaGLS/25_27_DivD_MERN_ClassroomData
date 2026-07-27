import Person from "./Person.js";
class Student extends Person{
    constructor(fn,ln,a,rollno){
        super(fn,ln,a)
        this.rollno = rollno
    }
    display(){
        return `${super.display()} \n Rollno =  ${this.rollno}`
    }
}
let s1 = new Student("Ram","Sharma",20,1001)
console.log(s1.display());