const string = "some";

const spelled = string.split("");
const size = spelled.length;
const newStr = [];
spelled.forEach((item, index) => {
    setTimeout(()=>{
       console.log(item);
    },index * 300);
})
// for(let str = 0; str < size; str++){
// setTimeout((index)=> {
//  newStr.push(spelled[str]);
// },1000);

// }
console.log(newStr)