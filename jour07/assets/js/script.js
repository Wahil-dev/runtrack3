const rebootBbutton = document.querySelector('#reboot-button');
const jumbotron = document.querySelector('#jumbotron');


rebootBbutton.addEventListener('click', function () {
    // Liste de citations tirées du film "Blade Runner"
    const citations = [
        "Tous ces moments se perdront dans l'oubli comme les larmes dans la pluie.",
        "Je veux dire, comme les larmes dans la pluie, c'est beau.",
        "Le plus dur ici, c'est de rêver.",
        "Ce sont les questions qui nous poussent.",
        "La lumière qui brille le plus fort est celle qui brûle le plus vite.",
        "Je n'ai vu que des navires en feu et des étoiles filantes.",
        "Il est temps de mourir.",
        "J'ai vu des choses que vous, les gens, ne pourriez pas croire.",
        "C'est un mauvais plan, ça ne signifie pas que je n'en suis pas capable.",
        "Rien n'est parfait, Hector. Même pas la mort.",
        "C'est ce qui nous rend humains, ne crois-tu pas ?"
    ];

    // On récupère une citation aléatoire
    const citation = citations[Math.floor(Math.random() * citations.length)];

    // On affiche la citation dans le jumbotron
    jumbotron.textContent = citation;
});