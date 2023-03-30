const btn = document.querySelector("#button");
const compteur = document.querySelector("#compteur");
var num = 1;

btn.addEventListener("click", addOne);
function addOne() {
    compteur.innerHTML = num;
    num++;
}
