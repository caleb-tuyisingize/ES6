var richard = {status: 'looking for work'};
const handler = {
    get(target, propName){
        console.log(target);
        console.log(propName);
        return target[propName];
    }
}
var agent = new Proxy(richard, handler); 

console.log(agent.status); // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)