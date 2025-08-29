var div = document.querySelector(".div");
let timeouts = [];
const fakePromise = new Promise((resolve, reject)=>{
    
    var API =  fetch("https://jsonplaceholder.typicode.com/comments").then(a=> a.json());
    if(API){
        resolve(API)
    }else{
        reject("Error occured line on the line told");
    }
})
.then((a)=> {

        a.forEach((data, index) => {
           const timedOut = setTimeout(()=>{
                var dataDiv = document.createElement("div");
            dataDiv.setAttribute("class","w-full bg-green-900 p-8 lg:text-4xl space-y-10 gap-12 rounded-[30px] shadow-lg lg:w-auto remova")
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
        timeouts.push(timedOut);
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

let divs = document.getElementsByClassName("mains");
const contact = ()=>{
    // divs.forEach(a => a.remove());
    timeouts.forEach((a)=> clearTimeout(a));
    timeouts = [];
    const appendedDivs = document.querySelectorAll(".remova");
    const navs = document.getElementById("navs");
    navs.classList.remove("fixed");
    appendedDivs.forEach((a)=> a.remove());
    div.innerHTML = `
     <div id="contact" class="bg-[url(https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/515513512_1038330208515213_2800585628437775038_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHVqJ1zNXB4Vu5QVmDG-aNs2EWR09iUiXLYRZHT2JSJcn_3R88T8dbpKxbYniC21Qbq4SfJA8QEFRpCwilZMElz&_nc_ohc=LM5ioFJ-LoIQ7kNvwHnqKY2&_nc_oc=Adnehp618pbXIFtU1dTXqcCeNoPiRA7PntdKXg4u4i6Rm8NSOiq6BhgEYUIpXGKrwrA&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=gfQhLTjOeXm3nuXTDxOTsg&oh=00_AfVMPFu5OJyWYs5wXu-snbwJi10OG8PAnGCWYthdauoW_w&oe=68A51AE5)] w-[100%] h-[600px] lg:h-[400px] lg:top-[-60px] bg-cover bg-no-repeat bg-fixed bg-center scroll-auto text-center pt-12 lg:w-[100%] lg:mx-auto lg:flex lg:relative lg:z-index-0" >

  <div id="rep"  class="lg:fixed good w-full mt-20">

  <h1 class="text-blue-200 font-bold text-4xl">Contact Us</h1>
  <p class="text-white">Caleb Mevis</p><br>
  <div class="space-x-5 text-4xl text-blue-200">
    <i class="fab fa-instagram"></i>
    <i class="fab fa-facebook"></i>
    <i class="fab fa-linkedin"></i>
    <i class="fab fa-x"></i>
  </div>
  </div>
    <div class="h-[500px] left-0 px-4 mt-[200px] absolute  bg-white w-full lg:w-[30%] lg:mt-0 lg:top-[-48px] lg:h-[400px] lg:relative lg:z-index-0">
      <h1 class="font-bold text-gray-900 text-4xl mt-10">Contact Us</h1>

    <div class="flex mx-auto mt-[10px] lg:mt-[40px] space-x-2 w-full h-20 lg:h-8 lg:w-[200px] font-bold items-center">
      <div class="rounded-full bg-blue-300 w-12 hue-rotate-90 text-center p-1 text-gray-900 text-4xl ">
        <i class="fab fa-instagram"></i>
      </div>
 
      <div class="rounded-full bg-blue-300 w-[80%]  lg:w-[300px] text-gray-900  hue-rotate-90 text-center p-1 text-2xl ">
        <h1 class="mx-2">Instagram</h1>
      </div>
    </div>
       
       
    <div class="flex lg:h-8 mx-auto mt-[10px] lg:mt-[40px] space-x-2 w-full h-20 lg:w-[200px] font-bold items-center">
      <div class="rounded-full bg-blue-300 w-12 hue-rotate-90 text-center p-1 text-gray-900 text-4xl ">
        <i class="fab fa-facebook"></i>
      </div>
 
      <div class="rounded-full bg-blue-300 w-[80%]  lg:w-[300px] text-gray-900  hue-rotate-90 text-center p-1 text-2xl ">
        <h1 class="mx-2">Facebook</h1>
      </div>
    </div>

        <div class="flex lg:h-8 mx-auto mt-[10px] lg:mt-[40px] space-x-2 w-full h-20 lg:w-[200px] font-bold items-center">
      <div class="rounded-full bg-blue-300 w-12 hue-rotate-90 text-center p-2 text-gray-900 text-4xl ">
        <i class="fab fa-x"></i>
      </div>
 
      <div class="rounded-full bg-blue-300 w-[80%]  lg:w-[300px] text-gray-900  hue-rotate-90 text-center p-1 text-2xl ">
        <h1 class="mx-2">X</h1>
      </div>
    </div>

        <div class="flex lg:h-8 mx-auto mt-[10px] lg:mt-[40px] space-x-2 w-full h-20 lg:w-[200px] font-bold items-center">
      <div class="rounded-full bg-blue-300 w-12 hue-rotate-90 text-center p-2 text-gray-900 text-4xl ">
        <i class="fab fa-linkedin"></i>
      </div>
 
      <div class="rounded-full bg-blue-300 w-[80%]  lg:w-[300px] text-gray-900  hue-rotate-90 text-center p-1 text-2xl ">
        <h1 class="mx-2">linkedIn</h1>
      </div>
    </div>

    </div>
    
    </div>
    <br><br><br><br><br><br>

    `;
   
}
console.log(divs);
function home(){
location.reload();


}

window.addEventListener("scroll", function(){
    
    const rep = document.getElementById("rep");
    if (window.scrollY < 100) {
        rep.style.opacity = "1";
    } else {
        // rep.classList.remove("opacity-0");
        rep.style.opacity = "0";
    }

})
