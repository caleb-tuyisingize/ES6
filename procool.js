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
    resolve("Video 2 resolved as second");
});
const getVideo3 = new Promise((resolve, reject)=>{
    resolve("Video 3 resolved");
});
const getVideo4 = new Promise((resolve, reject)=>{
    resolve("Video 4 resolved");
});
Promise.all([
    getVideo1,
    getVideo2,
    getVideo3,
    getVideo4,
]).then((messages)=>{
    console.log(messages);
})

//MIGRATTING THE NORMAL FUNCTION TO PROMISES FOR PROBLEM SOLVING

/*
const useLeft = false;
const userWatchingCatMem = false;

function watchinMemes(){
    if(useLeft){
        callBacks({
            name: "User Left",
            message: "Mevis Channel :-)"
    })
    }else if(userWatchingCatMem){ 
        errorCallBacks({
            name: "User Left",
            message: "Mevis Channel :- Cat"
        })
    }else{
        callBacks("Thumbs UP and subscribe");
    }

}

watchinMemes((message)=>{
    console.log(`The guy ${message.name} is on ${message.message} `);
},(err) =>{
    console.log(`Wow ${err}`);
})

*/

const useLeft = false;
const userWatchingCatMem = false;

function watchinMemes(){
    return new Promise((resolve, reject)=>{
    if(useLeft){
        resolve({
            name: "User Left",
            message: "Mevis Channel :-)"
    })
    }else if(userWatchingCatMem){ 
        reject({
            name: "User Left",
            message: "Mevis Channel :- Cat"
        })
    }else{
        resolve("Thumbs UP and subscribe");
    }

    })


}

watchinMemes().then((message)=>{
    console.log(`The guy ${message.name} is on ${message.message} `);
}).catch((err) =>{
    console.log(`Wow ${err}`);
})