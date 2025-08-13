const fakePromise = {
    then: function(resolve, reject){
        setTimeout(function(){
            resolve("Am dome");
        }, 5000);
    }
}

Promise.resolve(fakePromise).then((a)=> console.log(a));