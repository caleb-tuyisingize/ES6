/*
const checking = (isCold)=>{
    if(isCold){
        const freezing = "Grab a Jacket";
        console.log(freezing);
    }else{
        const hot = "Drow a Jacket";
        console.log(freezing);
    }
}
checking(false);


 */
// TEMPLATE LITERALS
const myName = 'Caleb';
const greeting = `Hello, my name is ${myName} `;
console.log(greeting);

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */
 
/*

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name">${animal.name}</h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>:  ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>:  ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>:  ${animal.speed}</li>
                <li><span class="bold">Diet</span>:  ${animal.diet}</li>
            </ul>
            <p class="brief"> ${animal.summary}</p>
        </div> 
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));
*/

// DESTRUCTURING BY CONCATINATING TWO ARRAYS
const arr1 = ["money", "Cars", "Drips"];
const arr2 = ["Food", "Drinks", "Fruits"];

const produce = [...arr1,...arr2];
console.log(produce);

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items.join(" "));

const funcPrint = (...items)=>{
    for(let item of items){
        console.log(item);
    }
}
funcPrint("Money","Sugar","Amandazi","Umugati",234,33,22,34344,555);
console.log(`\n _____________________________________________________________\n`);
/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here
function average(...numbers) {
    if(numbers.length === 0) return 0;
    let sum = 0;
    for(let num of numbers){
        sum += num; 
    }
    let avg = sum/numbers.length;
    return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

// REFACTORED

function average(...numbers) {
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());

/*
"use strict";
function IceScream(){
    this.scoop = 0;
}

IceScream.prototype.addScoop = function(){
    setTimeout(function(){
        this.scoop++;
        console.log("Scoop added to the function "+this.scoop);
    }, 500);
};
const dessert = new IceScream();
dessert.addScoop();
*/
// SOME CORRECTIONS ADDED

/*
"use strict";
function IceScream(){
    this.scoop = 0;
}

IceScream.prototype.addScoop = function(){
    const con= this;
    setTimeout(function(){
        con.scoop++;
        console.log("Scoop added to the function "+this.scoop);
    }, 500);
};
const dessert = new IceScream();
dessert.addScoop();

*/


/*
function IceScream(){
    this.scoop = 0;
}

IceScream.prototype.addScoop = function(){
    const cons = this;
    setTimeout(function(){
        cons.scoop++;
        console.log("Scoop added to the function "+cons.scoop);
    }, 500);
};
const dessert = new IceScream();
dessert.addScoop();
// console.log(dessert.scoop);
*/

// WITH ARROW FUNCTION

function IceScream(){
    this.scoops = 0;
}

IceScream.prototype.addScoops = function(){
    setTimeout(()=>{
        this.scoops++;
        console.log("Scoops addded to the function "+this.scoops); //WORKS REMEMBERS THE OUTER BOSS
    },5000);
};

const dessert = new IceScream();
dessert.addScoops();

function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

console.log(createSundae({}));
console.log(createSundae({scoops: 2})); 
console.log(createSundae({scoops: 2, toppings: ['Sprinkles']})); 
console.log(createSundae({toppings: ['Cookie Dough']})); 

function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor({houseColor: 'red', shutterColors: ['white', 'gray', 'pink']}));
console.log(houseDescriptor({houseColor: 'red'}));
console.log(houseDescriptor());
console.log(houseDescriptor({shutterColors: ['orange', 'blue']}));
console.log(houseDescriptor({}));

function buildHouse({floors = 1, color = 'red',walls = 'brick'}={}){
    const newFloors = floors === 1 ? "floor" : "floors";
    return `Your house has ${floors} ${newFloors} with ${color} ${walls} walls.`;
}


console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.

   // INHERTING THROUGH THE REGULAR FUNCTIONS

   function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  setTimeout(()=>{
      console.log(`Engine ${this.numEngines} is started`)
    },4500)
  this.enginesActive = true;
};

var richardsPlane = new Plane(1);
richardsPlane.startEngines();

// var jamesPlane = new Plane(4);
// jamesPlane.startEngines();



 // Season of the year and the leaves

 class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('falled to perform');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

function Products(name, price){
  this.name = name;
  this.price = price;

  this.displayProduct = function(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}$`);
  };
  this.calculateTotal = function(saleTax){
    return this.price + (this.price * saleTax);
  }
}
const saleTax = 0.50;


const product1 = new Products("Laptop to be sold item", 170.40);
const product2 = new Products("Phones shop", 430.40);
const product3 = new Products("Carpetano", 30.40);
const product4 = new Products("Carpetano", 30.40);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
product4.displayProduct();


function mevis(n){
    console.log("Calculating something and it is calculated");
    return n * n;
}
console.log(mevis(5));
console.log(mevis(5)); //One which was stored in the cache memory

