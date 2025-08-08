
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



function createPost(post){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push(post)
        const error = true;
        if(!error){
            resolve();
        }else{
            reject("Error: something went wrong");
        }
    },2000);
    })
    
    
}




createPost({title: "Post 3", body: "This is Post three"})
.then(()=>{
getPost()
})
.catch(err=>{
    console.log(err)
}
)