var richard = {status: 'looking for work',
      payRate: 4000
};
const handler = {
    /*
    get(target, propName, value){
        return target[propName];

        console.log(target);
        console.log(propName);
        return target[propName];
        

},

set(target, propName, value){
    return  target[value] = value;
}

//  return `If he is ${target[propName]} means he is following many leads, so you should offer a contract as soon as possible`;


*/

set(target, propName, value){
    if(propName === 'payRate'){
        value = value * 0.85;
    }
    target[propName] = value;
}
 
}
var agent = new Proxy(richard, handler); 
// agent.payRate = "New-Prop";
agent.payRate = 6000;

console.log(agent); // logs out the richard object (not t
// he agent object!) and the name of the property being accessed (`status`)

var obj1 = {
    _age : 25,
    _name: "Money",
    _height: 4,
    get age(){
        console.log(`getting the "Age" property`);
        console.log(this._age);
    },
    get height(){
        console.log(`getting the "Height" property`);
        console.log(this._height);
    }
};

obj1.age;
obj1.weight = 200;
console.log(obj1);


//MIGRATTING IN PROXIES
const obj2 = {
    age: 23,
    height: 5
}
const proxies = new Proxy(obj2,{
    get(target, properties){
        console.log(`The term is ${properties} and the value is ${target[properties]}`)
    }
});
proxies.age;