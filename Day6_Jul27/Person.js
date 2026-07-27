class Person{  
    //member functions
    constructor(fname,ln,age){
        this.fname = fname //data members
        this.lname = ln
        this.age = age
    }
    display(){
        return `Name = ${this.fname} ${this.lname} and age = ${this.age}`
    }
}
export default Person

// let p1 = new Person("Ram","sharma",20)
// console.log(p1.display());
 
