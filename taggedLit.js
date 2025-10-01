const tag = (string, ...values)=>{
return string.reduce(
    (result, str, i)=>{
       return result+str+(values[i] ? String(values[i]).replace(/bad/gi, "😔"):"");
        
    },""
);
//  return string.split(" ").replace(/bad/gi,""); 
}
const mood = "bad day";
console.log(tag`Today am doing just having ${mood} mood haa`);