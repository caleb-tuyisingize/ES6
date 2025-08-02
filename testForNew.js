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

