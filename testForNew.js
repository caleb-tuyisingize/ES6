class Prodducts{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    displayProducts(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculatingTotal(salesTax){
        return this.price + (this.price * salesTax);
        }
}
const salesTax = 0.50;
const product1 = new Prodducts("Car",2500);
product1.displayProducts();
console.log(`Total-Price: ${product1.calculatingTotal(salesTax)}`);

// FOR STATIC KEYWORD
 
class MathUtil{
    static PI = 3.14159;
    static getDiacmeter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
     return 2 * this.PI * radius;
    }
    static getArea(radius){

        return this.PI * radius * radius;
    }
}
// const mathUtil1 =new MathUtil()
 
console.log(MathUtil.PI)
console.log(MathUtil.getDiacmeter(23));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10)); 

//  FOR CLASS USER EXAMPLE
class User{

    static userCount = 0;

    constructor(username){ // is a special method used inside a JavaScript class to initialize (set up) a new object when it's created with the new keyword
        this.username = username;
        User.userCount++;
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username} User: ${User.userCount}`);
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

}
const user1 = new User("Mevis");
user1.sayHello();
const user2 = new User("Elie");
user2.sayHello();
const user3 = new User("Ishimwe");
user3.sayHello();
// console.log(user1.username);
console.log(user1.userCount); //UNDEFINED CAUSE USERCOUNT BELONGS TO THE CLASS USER CAUSE IT'S STATIC
console.log(User.getUserCount()); //INSTEAD USE CLASS NOT NEW OBJECT



// EXAMPLE FOR EXTENDS AND SUPPER FROM UDACITY

/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
	

}
	class Bicycle extends Vehicle{
	    constructor(color = "blue", wheels = 2, horn = "honk honk"){
	        super(color,wheels,horn)
	    }
	};

// your code goes here


const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);