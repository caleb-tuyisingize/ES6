function getHome(){
    let theDiv = document.querySelector(".relative");
     let users;
    function get(url){
        const user = fetch(url).then(res => res.json())
 .then((data) => {
  users = JSON.parse(JSON.stringify(data));
  let table = document.getElementById("tbl");
  users.forEach((pls, index)=>{
      let tr = document.createElement("tr");
            tr.innerHTML = `
            <td class="border-r-2 border-red-200">${pls.id}.</td>
            <td class="border-r-2 border-red-200">${pls.name}</td>
            <td class="border-r-2 border-red-200">${pls.email}</td>
            <td class="border-r-2 border-red-200">${pls.address.street}</td>
            <td><button id="delete" class="bg-red-200 p-3 rounded shadow-xl">Delete</button></td>
            `;
            
            tr.classList.toggle("odd:bg-gray-300");
            tr.classList.add("even:bg-white");
            table.appendChild(tr);
    document.querySelector(`#delete`).addEventListener("click",function(){
        users.splice(index, 1);
        tr.remove();
        console.log(`Removed user ${pls.name}`)
    });
            
        })

     
        
    })
 .catch((err) =>{
    console.error("Failed to load",err)
 theDiv.innerHTML = "Failed To load the data";
})

};
    
    get("https://jsonplaceholder.typicode.com/users");




}
getHome();

