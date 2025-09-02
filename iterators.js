const arr = [3,2,55,3,45,5];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next())

console.log(iterator.next())