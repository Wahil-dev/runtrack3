let containerImages = document.querySelector(".container-imgs");
const restartBtn = document.querySelector("#restartBtn");

//const images = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", "logo9"];
const images = [
    ["morceaux-1", "morceaux-2"], 
    ["morceaux-3", "morceaux-4"]
];
let imagesCopy;
let firstClick = 0;
let imageRemoved = images[0][0];
let start = false;
let indexOfImageClicked = []

//Draw images game
drawImage();

containerImages.addEventListener("click", (e) => {    
    if(!start) {
        images[0][0] = "";
        imagesCopy = JSON.parse(JSON.stringify(images));
        uploadImage()
        start = true;
    } 

    if(e.target.tagName == "IMG") {
        for(let y = 0; y < imagesCopy.length; y++) {
            for(let x = 0; x < imagesCopy[y].length; x++) {
                if(imagesCopy[y][x] != "") {
                    let image = document.querySelector(`#${imagesCopy[y][x]}`);
                    image.addEventListener("click", (e) => {
                        indexOfImageClicked = [y, x]
                        if(aroundIsEmpty(indexOfImageClicked)) {
                            imagesCopy[y][x] = "";
                            moveImage(e, indexOfImageClicked)
                        }
    
                        //Upload images 
                        uploadImage();
                    })
                }
            }
        }
    }
})

function drawImage() {
    for(let y = 0; y < images.length; y++) {
        for(let x = 0; x < images[y].length; x++) {
            let image = `
                <div class="flex-r box-img">
                    <img class="flex-r img" src="img/imageonline/${images[y][x]}.png" id="${images[y][x]}" alt="${images[y][x]}">
                </div>
            `;
            containerImages.innerHTML += image;
        }
    }
}

function moveImage(e, indexOfImageClicked) {
    let imageClicked = e.target.id;
    for(let y = 0; y < imagesCopy.length; y++) {
        for(let x = 0; x < imagesCopy[y].length; x++) {    
            if(imagesCopy[y][x] == "" && (y != indexOfImageClicked[0] || x != indexOfImageClicked[1])) {
                imagesCopy[y][x] = imageClicked;
            }
        }
    }
    // Check if win
    if(isWin()) {
        imagesCopy[0][0] = imageRemoved;
    }

}

function uploadImage() {
    containerImages.innerHTML = "";
    for(let i = 0; i < imagesCopy.length; i++) {
        for(let j = 0; j < imagesCopy[i].length; j++) {
            if(imagesCopy[i][j] != "") {
                let image = `
                    <div class="flex-r box-img">
                        <img class="flex-r img" src="img/imageonline/${imagesCopy[i][j]}.png" id="${imagesCopy[i][j]}" alt="${imagesCopy[i][j]}">
                    </div>
                `;
                containerImages.innerHTML += image;
            } else {
                let image = `
                    <div class="flex-r box-img"></div>
                `;
                containerImages.innerHTML += image;
            }
        }
    }
}

function aroundIsEmpty(imageClicked) {
    let y = imageClicked[0];
    let x = imageClicked[1];

    if(x-1 in imagesCopy[y]) {
        if(imagesCopy[y][x-1] == "") {
            return true;
        } 
    } 
    
    if(x+1 in imagesCopy[y]) {
        if(imagesCopy[y][x+1] == "") {
            return true;
        } 
    } 

    if(y+1 in images) {
        console.log("imagesCopy", imagesCopy)

        if(imagesCopy[y+1][x] == "") {
            return true;
        } 
    } 
    
    if(y-1 in images) {
        if(imagesCopy[y-1][x] == "") {
            return true;
        } 
    } 
    return false;
}

const isWin = () => {
    for(let y = 0; y < imagesCopy.length; y++) {
        for(let x = 0; x < imagesCopy[y].length; x++) {
            if(imagesCopy[y][x] != images[y][x]) {
                return false;
            }
        }
    }
    return true;
}