/*
Write a generator function fibonacciGenerator(limit) that yields Fibonacci numbers up to a specified limit. Remember, the first two Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.
*/

function * fibonacciGenerator(limit){
    const arr = [];
    const fiboNaccies = [];
    for(let num = 0; num <= limit; num++){
        arr.push(num);
        if(num === 0 || num === 1){
            fiboNaccies.push(arr[num]);
        }else{
        fiboNaccies.push(arr.map(a=> a+arr[1]));
        }
    }
    yield fiboNaccies.flat();
    
    
}

for(let yielder of fibonacciGenerator(5)){
    console.log(yielder);
}

