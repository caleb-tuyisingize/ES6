const arr = [3,2,55,3,45,5];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next().value)

console.log(iterator.next().value)
console.log(iterator.next().value)

console.log(iterator.next().value)

console.log(iterator.next().value)

console.log(iterator.next().value)

console.log(iterator.next().value)

function *numbers(){
    yield 12;
    yield 4;
    yield 2;
    yield 19;
    yield 20;
}

const nums = numbers();

console.log(typeof nums[Symbol.iterator])
console.log(nums[Symbol.iterator]() === nums)

for(let sol of nums){
    console.log(sol)
}