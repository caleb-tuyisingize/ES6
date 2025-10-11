class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name}, and I am ${this.age} years old`);
    }
}

class Student extends Person{
    constructor(name, age, course){
        super(name,age);
        this.course = course;
    }
    study(){
      console.log(`And ${this.name} is currently studying ${this.course}`);
    }
}
const userGreet = new Person("Caleb", 23, "Database Adminstrator");
const userStudies = new Student("Caleb", 23, "Database Adminstrator");

userGreet.greet();
userStudies.study();