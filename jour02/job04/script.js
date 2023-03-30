const textarea = document.querySelector("#keyLogger");

document.addEventListener("keydown", (event) => {
    textarea.value += event.key;
})
