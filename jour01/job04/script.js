
function bisextile(annee) {
    if(annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0)) {
        return true;
    }
    return false;
}

bisextile(2024)