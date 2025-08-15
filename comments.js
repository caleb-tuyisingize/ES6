var div = document.querySelector(".div");

const fakePromise = new Promise((resolve, reject)=>{
    
    const API =  fetch("https://jsonplaceholder.typicode.com/comments").then(a=> a.json());
    if(API){
        resolve(API)
    }else{
        reject("Error occured");
    }
})
.then((a)=> {
        a.forEach((data, index) => {
            setTimeout(()=>{
                var dataDiv = document.createElement("div");
            dataDiv.setAttribute("class","w-full bg-green-900 p-8 lg:text-4xl space-y-10 gap-12 rounded-[30px] shadow-lg lg:w-auto")
            dataDiv.innerHTML = `
            <h1 class = "font-bold lg:text-2xl text-red-300 uppercase text-center underline">${data.name}</h1>
            <h2 class="font-semibold lg:text-2xl text-red-300 lowercase">${data.email}</h2>
            <p class="lg:text-2xl">${data.body}</p>
            `;
            dataDiv.style.opacity = 0;
            dataDiv.style.transition = "opacity 0.1s ease";
            
            requestAnimationFrame(()=>{
                dataDiv.style.opacity = 1;
                
            })
            div.appendChild(dataDiv);
        },index * 90)
       })
       
       }
       )
.catch((message)=>{
    console.error(message);
    div.innerHTML = `
    <div class="lg:absolute lg:mx-[35%] z-index-1 lg:w-[300px]">
    <img src="img/Puppet_002 Clipart_ High-res PNG at 300 DPI, ideal for merchandise_ Creepy design, transparent background for seamless integration, Graphics.jpg" class="mx-auto lg:mx-auto rounded-[20%] w-20 lg:w-[80px] animate-bounce mt-20"><br>
    <h1 class="text-red-700 text-2xl text-center lg:text-[40px] animate-bounce ">Network Lost</h1>
    </div>
    `;
})



var menus = document.getElementById("menus");
var cancel = document.getElementById("cancel");
var menu = document.querySelector("#menu");
function reviewer(){
menus.classList.remove("hidden");
}
menu.addEventListener("click",reviewer)
    
cancel.addEventListener("click",function(){
    menus.classList.add("hidden");
})
