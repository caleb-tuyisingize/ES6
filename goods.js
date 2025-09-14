class Many{
    constructor(name, age, favPet, favDrink, occupation){
        this.name = name;
        this.age = age;
        this.favPet = favPet;
        this.favDrink = favDrink;
        this.occupation = occupation;
    }

    greet(){
     console.log(`Hello My name is ${this.name} am  ${this.age} years old, I like  ${this.favPet} and also I like to drink  ${this.favDrink} am currently in ${this.occupation}`);
    }
}
let name = prompt("Inter your name here:","");
console.log()