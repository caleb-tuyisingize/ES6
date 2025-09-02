const string = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero magni dolorem assumenda placeat aliquid illo possimus dignissimos a, ratione nulla veniam esse, voluptatem iure recusandae reprehenderit culpa! Iusto, nobis necessitatibus?";

const spelled = string.split("");
const size = spelled.length;
const newStr = [];
spelled.forEach((item, index) => {
    setTimeout(()=>{
       console.log(item);
    },index * 100);
})
// for(let str = 0; str < size; str++){
// setTimeout((index)=> {
//  newStr.push(spelled[str]);
// },1000);

// }
console.log(newStr)
