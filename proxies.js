var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

console.log(agent.status); // returns 'looking for work'