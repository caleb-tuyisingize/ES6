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


}
const user1 = new User("Mevis");
console.log(user1.username);
const user2 = new User("Elie");
console.log(user2.username);
const user3 = new User("Ishimwe");
console.log(user3.username);
// console.log(user1.username);
console.log(user1.userCount); //UNDEFINED CAUSE USERCOUNT BELONGS TO THE CLASS USER CAUSE IT'S STATIC
console.log(User.userCount); //INSTEAD USE CLASS NOT NEW OBJECT