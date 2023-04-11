const inscriptionForm = document.querySelector("#inscriptionForm");


//________________________ Connexion Form
inscriptionForm.addEventListener("submit", (event) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    const formData = new FormData(inscriptionForm);

    fetch("inc/b_inscr.php", {
        method: "POST", 
        body: formData
    })
    .then(response => response.json())
    .then(jsonData => processResponse(jsonData[0]))
    .catch(error => {
        console.error(error);
    })
})
//loginResponse

const processResponse = (jsonData) => {
    console.log(jsonData);
    let inscriptionResponse = "inscriptionResponse";
    let prenomErr = "prenomErr";
    let nomErr = "nomErr";
    let emailErr = "emailErr";
    let passwordErr = "passwordErr";
    let cPasswordErr = "cPasswordErr";

    const inscriptionResMsg = document.querySelector(`#${inscriptionResponse}`);
    const prenomErrMsg = document.querySelector(`#${prenomErr}`);
    const nomErrMsg = document.querySelector(`#${nomErr}`);
    const emailErrMsg = document.querySelector(`#${emailErr}`);
    const passwordErrMsg = document.querySelector(`#${passwordErr}`);
    const cPasswordErrMsg = document.querySelector(`#${cPasswordErr}`);

    
    if(inscriptionResponse in jsonData) {
        inscriptionResMsg.textContent = jsonData[inscriptionResponse];
        inscriptionResMsg.style.display = "block";
        if(jsonData[inscriptionResponse] == "inscription réussie") {
            setTimeout(moveToConnection, 400);
        }

        emailErrMsg.style.display = "none";
        passwordErrMsg.style.display = "none";
        cPasswordErrMsg.style.display = "none";
        nomErrMsg.style.display = "none";
        prenomErrMsg.style.display = "none";
    } else {
        if(emailErr in jsonData) {
            emailErrMsg.textContent = jsonData[emailErr];
            emailErrMsg.style.display = "block";
        }
        
        if(passwordErr in jsonData) {
            passwordErrMsg.textContent = jsonData[passwordErr];
            passwordErrMsg.style.display = "block";
        }
        
        if(cPasswordErr in jsonData) {
            cPasswordErrMsg.textContent = jsonData[cPasswordErr];
            cPasswordErrMsg.style.display = "block";
        }

        if(prenomErr in jsonData) {
            prenomErrMsg.textContent = jsonData[prenomErr];
            prenomErrMsg.style.display = "block";
        }
        
        if(nomErr in jsonData) {
            nomErrMsg.textContent = jsonData[nomErr];
            nomErrMsg.style.display = "block";
        }

        inscriptionResMsg.style.display = "none";
    }
}

