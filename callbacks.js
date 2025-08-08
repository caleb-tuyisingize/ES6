
const posts = [
    {title: "Post 1", body: "This is the Post one"},
    {title: "Post 2", body: "This is the Post two"}
]

let div = document.querySelector(".data");

let outPut = "";
let counter = 0;
let getPost = ()=>{
    setTimeout(()=>{
        const post = posts[counter];
            posts.forEach((post, index)=>{
                    outPut +=`<li>${counter}: ${post.title}</li>`;
            })
            div.innerHTML =outPut;
        },1000);
    }



function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000);
}



createPost({title: "Post 3", body: "This is Post three"},getPost);