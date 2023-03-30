const btn = document.querySelector("#button");
const container = document.querySelector(".container");
var article = document.createElement("article");
article.textContent = "la vie a plus d'imagination que nous";
var hide = true;

btn.addEventListener("click", showHide);
function showHide() {
    if(hide) {
        container.appendChild(article);
        btn.innerHTML = "supprimer";
        hide = false;
    } else {
        article.remove();
        btn.innerHTML = "creer";
        hide = true;
        article.remove();
    }
}
