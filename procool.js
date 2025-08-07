const p = new Promise((resolve, reject)=>{
    const addition = 1+2;
    if(addition == 2){
        resolve("Success!");
    }else{
        reject("Failed");
    }
})
p.then((message)=>{
    console.log(`Your promise in then is ${message}`);
}).catch((error)=>{
    console.error(`Your promise is in the catch ${error}`);
})


//BY USING THE Promise.all()

const getVideo1 = new Promise((resolve, reject)=>{
    resolve("Video 1 resolved");
});
const getVideo2 = new Promise((resolve, reject)=>{
    resolve("Video 2 resolved");
});
const getVideo3 = new Promise((resolve, reject)=>{
    resolve("Video 3 resolved");
});
Promise.all([
    getVideo1,
    getVideo2,
    getVideo3
]).then((messages)=>{
    console.log(messages);
})