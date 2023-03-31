const footer = document.querySelector("#footer");
const bar = document.querySelector(".bar");
const body = document.querySelector("#body");

document.addEventListener("scroll", () => {
    const screenHeight = window.innerHeight;
    const bodyHeight = body.clientHeight - screenHeight;
    const scrollY = window.scrollY;

    var width = (scrollY * 100) / bodyHeight;
    bar.style.width = width+"%";

    console.log(body.clientHeight)
})
