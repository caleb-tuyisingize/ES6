
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
        const error = false;
        if(!error){
            resolve();
        }else{
            reject("Error: something went wrong");
        }
    },2000);
    })
    
    
}

// createPost({title: "Post 3", body: "This is Post three"})

/*
.then(()=>{
getPost()
})
.catch(err=>{
    console.log(err)
}
)
*/
 
// Promise.all([]) and also the use of fetch API

/*
const promise1= Promise.resolve("New promise as the first");
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=> setTimeout(resolve("Promise Solved"),3000,"Goodbye"));
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
*/

// ASYNC AWAIT Async / Await

/*
async function popin(){
await createPost({title: "Post 3", body: "This is Post three"});
getPost();
}
popin()
*/

//Async / Await / With Fetch

async function fetchData(){
    const datas = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await datas.json();
    console.log(res)
    
}
fetchData();


/*
Promise.all([
    promise1,
    promise2,
    promise3,
    promise4
])
.then((values)=>{
    console.log(values)
})

*/


