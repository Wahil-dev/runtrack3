import * as auth from "./auth.js";

const username = document.querySelector("#username");
let delBtn = document.querySelector("#delete");

//___________________________ Get userData
fetch("inc/api/user.php")
.then(response => response.json())
.then(jsonData => {
    if(jsonData != "false") {
        process_data(jsonData);
    }
});


const process_data = (user) => {
    username.textContent = ` ${user.nom} ${user.prenom}`;
}

delBtn.addEventListener("click", () => {
    fetch("inc/api/delete.php", {
        method: "DELETE", 
    })
    .then(response => response.text())
    .then(data => {
        alert("compte supprimer !");
        auth.moveToConnection();
    })
    .catch(error => {
        console.error(error);
    })
})