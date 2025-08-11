function getHome(){
    let theDiv = document.querySelector(".relative");
     let users;
    function get(url){
        const user = fetch(url).then(res => res.json())
 .then((data) => {
  users = JSON.parse(JSON.stringify(data));
  let table = document.getElementById("tbl");
    let tr = document.createElement("tr");
    users.forEach((pls)=>{
            tr.innerHTML = `
            <td>${pls.id}</td>
            <td>${pls.name}</td>
            <td>${pls.email}</td>
            <td>${pls.address.street}</td>
            `;
            
            console.table(pls);
            
        })
        table.appendChild(tr);

        
        
    })
 .catch((err) =>{
 theDiv.innerHTML = "Failed To load the data";
})

};
    
    get("https://jsonplaceholder.typicode.com/users");

}
getHome();

