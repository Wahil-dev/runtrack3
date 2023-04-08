let afficher = document.querySelector("#button");
let para = document.querySelector("#text");

afficher.addEventListener("click", () => {
    fetch("expression.txt")
    .then(response => response.text())
    .then(text => 
        para.textContent = text
    );
});
