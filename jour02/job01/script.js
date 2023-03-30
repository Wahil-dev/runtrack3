const btn = document.querySelector("#button");
const article = document.querySelector("#citation");

btn.addEventListener("click", citation);

function citation() {
    console.log(article.textContent);
}