date = new Date("2020-12-25");
annee = date.getFullYear(); //year
mois = date.getMonth()+1;
jour = date.getDate();
jourSemaine = date.getDay();

// Liste des jours fériés de l'année 2020
var joursFeries = [
"01-01", // Jour de l'an
"13-04", // Lundi de Pâques
"01-05", // Fête du Travail
"08-05", // Victoire 1945
"21-05", // Ascension
"01-06", // Lundi de Pentecôte
"14-07", // Fête Nationale
"15-08", // Assomption
"01-11", // Toussaint
"11-11", // Armistice 1918
"25-12"  // Noël
];

// Formatage de la date pour comparaison avec les jours fériés
var dateFormatee = (`0${jour}`).slice(-2) + "-" + (`0${mois}`).slice(-2);

console.log(dateFormatee)
// Vérification si la date est un jour férié
if(joursFeries.includes(dateFormatee)) {
    console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié.");
}


// Vérification si la date est un week-end
else if(jourSemaine === 0 || jourSemaine === 6) {
    console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end.");
}


// Sinon, c'est un jour travaillé
else {
    console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé.");
}