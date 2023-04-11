// import { validateEmail, validatePassword, process_input } from "./auth.js";
import * as auth from "./auth.js";

const connexionForm = document.querySelector("#connexionForm");


//________________________ Connexion Form
connexionForm.addEventListener("submit", (event) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    const formData = new FormData(connexionForm);
    const email = auth.process_input(formData.get('email'));
    const password = auth.process_input(formData.get('password'));

    //______________________________ Email Vérification
    let [emailErr, passwordErr] = ["", ""];

    console.log(emailErr, passwordErr)
    if(email != "") {
        if(!auth.validateEmail(email)) {
            emailErr = "entrer un bon email !";
        }
    } else {
        emailErr = "email obligatoire !";
    }

    //______________________________ Password Vérification
    if(password != "") {
        if(!auth.validatePassword(password)) {
            passwordErr = "8 caractere, 1 chifre, maj, min";
        }
    } else {
        passwordErr = "password obligatoire !";
    }

    //_____________________ Validation js
    if(emailErr == "" && passwordErr == "") {
        fetch("inc/b_conn.php", {
            method: "POST", 
            body: formData
        })
        .then(response => response.json())
        .then(jsonData => processResponse(jsonData[0]))
        .catch(error => {
            console.error(error);
        })
    } else {
        processResponse({
            "emailErr": emailErr,
            "passwordErr": passwordErr,
        })
    }
})
//loginResponse

const processResponse = (jsonData) => {
    console.trace();
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
            setTimeout(auth.moveToIndex, 400);
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

