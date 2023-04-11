import * as auth from "./auth.js";
const inscriptionForm = document.querySelector("#inscriptionForm");


//________________________ Connexion Form
inscriptionForm.addEventListener("submit", (event) => {
    // Empêche la soumission par défaut du formulaire
    event.preventDefault();

    const formData = new FormData(inscriptionForm);
    const email = auth.process_input(formData.get('email'));
    const nom = auth.process_input(formData.get('nom'));
    const prenom = auth.process_input(formData.get('prenom'));
    const password = auth.process_input(formData.get('password'));
    const cPassword = auth.process_input(formData.get('cPassword'));

    let [nomErr, prenomErr, emailErr, passwordErr, cPasswordErr, ] = ["", "", "", "", ""];
    
    //______________________________ Nom Vérification
    if(nom != "") {
        if(auth.process_input(nom).length < 3) {
            nomErr = "min 3 caractere";
        }
    } else {
        nomErr = "nom obligatoire !";
    }
    
    //______________________________ Prenom Vérification
    if(prenom != "") {
        if(auth.process_input(prenom).length < 3) {
            prenomErr = "min 3 caractere";
        }
    } else {
        prenomErr = "prenom obligatoire !";
    }
    
    //______________________________ Email Vérification
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
    
    //______________________________ Confirm Password Vérification
    if(cPassword != "") {
        if(cPassword != password) {
            cPasswordErr = "confirm password != password";
        }
    } else {
        cPasswordErr = "confirm password obligatoire !!";
    }


    //_____________________ Validation js
    if(emailErr == "" && passwordErr == "" && cPassword != "") {
        fetch("inc/b_inscr.php", {
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
            "cPasswordErr": cPasswordErr,
            "nomErr": nomErr,
            "prenomErr": prenomErr,
        })
    }
})
//loginResponse

const processResponse = (jsonData) => {
    console.trace();
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
            setTimeout(auth.moveToConnection, 300);
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

