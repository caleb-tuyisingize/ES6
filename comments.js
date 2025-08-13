var div = document.querySelector("div");

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
            dataDiv.setAttribute("class","bg-green-900 p-8 text-4xl space-y-10 gap-12 rounded-[30px] shadow-lg")
            dataDiv.innerHTML = `
            <h1 class = "font-bold text-6xl text-red-300 uppercase text-center underline">${data.name}</h1>
            <h2 class="font-semibold text-6xl text-red-300 lowercase">${data.email}</h2>
            <p class="text-5xl">${data.body}</p>
            `;
            dataDiv.style.opacity = 0;
            dataDiv.style.transition = "opacity 0.5s ease";
            
            requestAnimationFrame(()=>{
                dataDiv.style.opacity = 1;
                
            })
            div.appendChild(dataDiv);
        },index * 300)
       })
       
       }
       )
.catch((message)=>{
    console.error(message);
    div.innerHTML = `
    <img src="https://i.pinimg.com/736x/a6/05/bb/a605bb419f184a05d89084f80f03db35.jpg" class="mx-auto rounded-[20%]"><br>
    <h1 class="text-red-700 text-center text-[120px]">Network Lost</h1>
    `;

})
    