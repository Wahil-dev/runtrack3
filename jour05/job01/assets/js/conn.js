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
    .then(response => response.json())
    .then(jsonData => processResponse(jsonData[0]))
    .catch(error => {
        console.error(error);
    })
})
//loginResponse

const processResponse = (jsonData) => {
    console.log(jsonData);
    let loginResponse = "loginResponse";
    let emailErr = "emailErr";
    let passwordErr = "passwordErr";
    const loginResMsg = document.querySelector(`#${loginResponse}`);
    const emailErrMsg = document.querySelector(`#${emailErr}`);
    const passwordErrMsg = document.querySelector(`#${passwordErr}`);

    
    if(loginResponse in jsonData) {
        loginResMsg.textContent = jsonData[loginResponse];
        loginResMsg.style.display = "block";
        if(jsonData[loginResponse] == "connexion réussie") {
            setTimeout(moveToIndex, 400);
        }

        emailErrMsg.style.display = "none";
        passwordErrMsg.style.display = "none";
    } else {
        if(emailErr in jsonData) {
            emailErrMsg.textContent = jsonData[emailErr];
            emailErrMsg.style.display = "block";
        }
        
        if(passwordErr in jsonData) {
            passwordErrMsg.textContent = jsonData[passwordErr];
            passwordErrMsg.style.display = "block";
        }

        loginResMsg.style.display = "none";
    }
}

