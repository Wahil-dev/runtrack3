const containerImages = document.querySelector(".container-imgs");
const recommencerBtn = document.querySelector("#recommencer");

const images = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", "logo9"];

let firstClick = 0;

for(let i = 0; i < images.length; i++) {
    let image = document.querySelector(`#${images[i]}`);
    image.addEventListener("click", (e) => {
        if(isFirstClick()) {
            image.remove();
        } else {
            moveImage(e)
        }
    })
}

function moveImage(e) {
    console.log(e.target);
}

function isFirstClick(e) {
    if(firstClick < 1) {
        firstClick = 1;
        return true;
    }
    return false;
}