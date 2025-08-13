/*
const fakePromise = {
    then: function(resolve, reject){
        setTimeout(function(){
            resolve("Am dome");
        }, 5000);
    }
}

Promise.resolve(fakePromise).then((a)=> console.log(a));

*/


const fakePromise = new Promise((resolve, reject)=>{
    setInterval(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then(a=> a.json()).then(a=> console.log(a));
    }, 1000);
});
// fakePromise.then((message)=>{
//     console.log(`The promise said ${message}`)
// }).catch(err => console.error(`The promise dennied by ${err}`));