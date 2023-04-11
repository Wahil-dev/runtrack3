const connexionForm = document.querySelector("#connexionForm");
//const inscriptionForm = document.querySelector("#inscriptionForm");


//________________________ Connexion Form
connexionForm.addEventListener("submit", (event) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    const formData = new FormData(connexionForm);

    fetch("inc/b_conn.php", {
        method: "POST", 
        body: formData
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => {
        console.error(error);
    })

})


