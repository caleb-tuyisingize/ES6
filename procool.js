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