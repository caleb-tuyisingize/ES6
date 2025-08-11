function getHome(){
    let theDiv = document.querySelector(".relative");
     let users;
    function get(url){
        const user = fetch(url).then(res => res.json())
 .then((data) => {
  users = JSON.parse(JSON.stringify(data));
  let table = document.getElementById("tbl");
    let tr = document.createElement("tr");
  users.map((a)=>{
    tr.innerHTML = `
    <td>${a.id}</td>
    <td>${a.name}</td>
    <td>${a.email}</td>
    <td>${a.address.street}</td>

    
    `;
    
    table.appendChild(tr);
});
  
                                 
  console.log(users);
                      
 })
 .catch((err) =>{
 theDiv.innerHTML = "Failed To load the data";
})

};
    
    get("https://jsonplaceholder.typicode.com/users");

}
getHome();

