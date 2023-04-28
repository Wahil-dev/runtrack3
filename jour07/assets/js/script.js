const rebootBbutton = document.querySelector('#reboot-button');
const jumbotron = document.querySelector('#jumbotron');
const pagination = document.querySelector('.pagination');
const modal_2 = document.querySelector('.modal-2');
const contentModal_2 = modal_2.querySelector('.content');
const closeModel = document.querySelector('#closeModel');

// Liste de citations tirées du film "Blade Runner"
const citations = [
    "Tous ces moments se perdront dans l'oubli comme les larmes dans la pluie.",
    "Je veux dire, comme les larmes dans la pluie, c'est beau.",
    "Le plus dur ici, c'est de rêver.",
    // "Ce sont les questions qui nous poussent.",
    // "La lumière qui brille le plus fort est celle qui brûle le plus vite.",
    // "Je n'ai vu que des navires en feu et des étoiles filantes.",
    // "Il est temps de mourir.",
    // "J'ai vu des choses que vous, les gens, ne pourriez pas croire.",
    // "C'est un mauvais plan, ça ne signifie pas que je n'en suis pas capable.",
    // "Rien n'est parfait, Hector. Même pas la mort.",
    // "C'est ce qui nous rend humains, ne crois-tu pas ?"
];

// On affiche la premiere citation au chargement de la page
jumbotron.textContent = citations[0];
// On ajoute la classe active sur la premiere page
pagination.children[1].classList.add('active');

rebootBbutton.addEventListener('click', function () {
    // On récupère une citation aléatoire
    const citation = citations[Math.floor(Math.random() * citations.length)];

    // On affiche la citation dans le jumbotron
    jumbotron.textContent = citation;
});

// Je recupere le nombre de page
const numberOfPage = citations.length;


// Pagination tache
pagination.addEventListener('click', function (e) {
    e.preventDefault();

    // On récupère la cible du clic
    const target = e.target;
    // Si la cible est un lien
    if (target.tagName === 'A') {
        // On récupère le numéro de la page
        const page = target.dataset.citation;

        // On récupère la page active
        const activePage = pagination.querySelector('.active a');

        // Si la cible est un lien avec la dataset previous
        if (page === 'previous') {
            // On récupère le numéro de la page active
            let page = activePage.dataset.citation;

            // On récupère la page précédente
            let previousPage = activePage.parentElement.previousElementSibling;

            // Si la page active est la premiere page on passe à la dernière page
            if (page === '0') {
                page = citations.length-1;
                previousPage = pagination.children[page+1];
            } else {
                page--;
            }

            // On supprime la classe active de la page active
            activePage.parentElement.classList.remove('active');

            // On ajoute la classe active sur la page précédente
            previousPage.classList.add('active');

            // On affiche la citation dans le jumbotron
            jumbotron.textContent = citations[page];
        } 
        // Si la cible est un lien avec la dataset next
        else if (page === 'next') {
            // On récupère le numéro de la page active
            let page = activePage.dataset.citation;
            
            // On récupère la page suivante
            let nextPage = activePage.parentElement.nextElementSibling;

            // Transforme la page en nombre
            page = Number(page);

            // Si la page active est la dernière page on passe à la première page
            if(page == citations.length-1) {
                page = 0;
                nextPage = pagination.children[1];
            } else {
                page++;
            }   

            // On supprime la classe active de la page active
            activePage.parentElement.classList.remove('active');
            
            // On ajoute la classe active sur la page suivante
            nextPage.classList.add('active');

            // On affiche la citation dans le jumbotron
            jumbotron.textContent = citations[page];
        } else {
            // si la page clicker est la page active on ne fait rien
            if (target.classList.contains('active')) return;
    
            // On verifie si la citation existe dans le tableau citations
            if (!citations[page]) return;
            
            // On supprime la classe active de la page active
            pagination.querySelector('.active').classList.remove('active');
    
            // On ajoute la classe active sur la page cliquée
            target.parentElement.classList.add('active');
    
            // On affiche la citation dans le jumbotron
            jumbotron.textContent = citations[page];
        }
    } 
});

// Rendre actif l'element cliquer de list-group
const listGroup = document.querySelector('.list-group');
listGroup.addEventListener('click', function (e) {
    const target = e.target;

    // Recuperer l'element actif
    const activeElement = listGroup.querySelector('.active');

    // Supprimer la classe active de l'element actif
    activeElement.classList.remove('active');

    // Ajouter la classe active sur l'element cliquer
    target.classList.add('active');
})

// Progress bar tache
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const progressValue = document.querySelector('.progress-value');
const progressButton = document.querySelectorAll('.controls');


// Fonction pour mettre a jour la barre de progression
function updateProgress(button) {
    // Recuperer la dataset-controls des buttons
    const btn = button.dataset.controls;
    const value = parseInt(progress.getAttribute('aria-valuenow'));
    // Vérifier si la barre de progression est entre 0 et 100
    if(btn == "progresser") {
        if(value < 100) {
            // Augmenter la barre de progression de 10%
            progressBar.style.width = `${value + 10}%`;

            // mettre a jour la valeur de la barre de progression
            progress.setAttribute('aria-valuenow', `${value + 10}%`);
        }
    } else if(btn == "regresser") {
        if(value > 0) {
            // Diminuer la barre de progression de 10%
            progressBar.style.width = `${value - 10}%`;

            // mettre a jour la valeur de la barre de progression
            progress.setAttribute('aria-valuenow', `${value - 10}%`);
        }
    }
}

progressButton.forEach(button => {
    button.addEventListener('click', () => {
        updateProgress(button);
    });
});


// Afficher une modal qui recapitule les informations des champs du formulaire qui a une class form-1 quand on click en ordre sur les bouton suivant D, J, C
const form1 = document.querySelector('.form-1');

// button ordre array
const buttonOrder = ['D', 'J', 'C'];

// Verifier les button clicker
const buttonClicker = [];
window.addEventListener("keydown", function (e) {
    // Si on click que sur les lettres alphabetique
    if(e.keyCode > 65 && e.keyCode < 90) buttonClicker.push(e.key);

    // Remettre le tableau buttonClicker a zero si on click sur la touche echap
    if(e.keyCode == 27) buttonClicker.length = 0;
    
    // Verifier si les button clicker sont dans le bon ordre
    if(buttonClicker.length == buttonOrder.length) {
        // Verifier si les button clicker sont dans le bon ordre
        if(buttonClicker.every((value, index) => value == buttonOrder[index])) {
            // Afficher la modal
            afficherModal();

        } else {
            // Remettre le tableau buttonClicker a zero
            buttonClicker.length = 0;
        }
    }
})

// Casher le modal-2
closeModel.addEventListener('click', () => {
    modal_2.style.display = "none";
    // On arrete la possibilité de scroll
    document.body.style.overflow = "visible";
});


// récuperer les informations du formulaire fprm1 et les afficher dans la modal-2
const getForm1 = () => {
    const inputs = form1.querySelectorAll('input');

    // Supprimer lecontent de contentModal_2
    contentModal_2.innerHTML = "";

    // parcourir les inputs
    inputs.forEach(input => {
        console.log(input.value);
        // creation d'un element p
        const field = document.createElement('p');

        // Ajouter le name de l'input dans le textContent
        // afficher la valeur de l'input s'il n'est pas vide sinon afficher "Field vide"
        field.textContent = input.name + " : " + (input.value == "" ? "Field vide" : input.value);

        contentModal_2.appendChild(field);
    });
};

const afficherModal = () => {
    getForm1();
    modal_2.style.display = "flex";
    buttonClicker.length = 0;
    // On arrete la possibilité de scroll
    document.body.style.overflow = "hidden";
};