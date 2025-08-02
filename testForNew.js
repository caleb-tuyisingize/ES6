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