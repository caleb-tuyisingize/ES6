
const posts = [
    {title: "Post 1", body: "This is the Post one"},
    {title: "Post 2", body: "This is the Post two"}
]

let div = document.querySelector(".data");

let getPost = ()=>{
 setTimeout(()=>{
    let outPut = "";
  posts.forEach((post, index)=>{
   outPut +=`<li>${index}: ${post.title}</li>`;
})
div.innerHTML =outPut;
},1000);
}
getPost();