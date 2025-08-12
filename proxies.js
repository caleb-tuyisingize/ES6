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

console.log(agent); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)