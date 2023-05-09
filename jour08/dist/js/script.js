const mobileBtn = document.querySelector("#mobile-btn");
const moblileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", () => {
    moblileMenu.classList.toggle("hidden");
});