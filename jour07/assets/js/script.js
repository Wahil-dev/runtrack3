const rebootBbutton = document.querySelector('#reboot-button');
const jumbotron = document.querySelector('#jumbotron');
const pagination = document.querySelector('.pagination');

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
            console.log(page)
            // On récupère la page précédente
            let previousPage = activePage.parentElement.previousElementSibling;

            // Si la page active est la premiere page on passe à la dernière page
            if (page === '0') {
                page = citations.length;
                console.log(page);
                previousPage = pagination.children[page];
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

            // Si la page active est la dernière page on passe à la première page
            if(page == citations.length-1) {
                page = 1;
                nextPage = pagination.children[page];
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