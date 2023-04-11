const username = document.querySelector("#username");

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