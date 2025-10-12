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
let user1 = new greet("Caleb Tuyisingizehvuyg", 20, "Dog", "Soft drink Splite", "Coder");
console.log(Many.greet);