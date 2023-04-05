let containerImages = document.querySelector(".container-imgs");
const recommencerBtn = document.querySelector("#recommencer");
let isWin = false;
//const images = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", "logo9"];
const images = [
    ["morceaux-1", "morceaux-2"], 
    ["morceaux-3", "morceaux-4"]
];

let firstClick = 0;
let imageRemoved = "morceaux-1";
let start = false;
let indexOfImageClicked = []

drawImage();

containerImages.addEventListener("click", (e) => {
    console.log(images)
    if(!start) {
        images[0][0] = "";
        uploadImage()
        start = true;
    }

    for(let i = 0; i < images.length; i++) {
        for(let j = 0; j < images[i].length; j++) {
            
            if(images[i][j] != "") {
                let image = document.querySelector(`#${images[i][j]}`);
                image.addEventListener("click", (e) => {
                    indexOfImageClicked = [i, j]
                    if(aroundIsEmpty(indexOfImageClicked)) {
                        images[i][j] = "";
                        moveImage(e, indexOfImageClicked)
                    }
    
                    //Upload images 
                    uploadImage();
                })
            }
        }
    }
})

function drawImage() {
    for(let i = 0; i < images.length; i++) {
        for(let j = 0; j < images[i].length; j++) {
            let image = `
                <div class="flex-r box-img">
                    <img class="flex-r" src="img/imageonline/${images[i][j]}.png" id="${images[i][j]}" alt="${images[i][j]}">
                </div>
            `;
            containerImages.innerHTML += image;
        }
    }
}

function moveImage(e, indexOfImageClicked) {
    let imageClicked = e.target.id;
    for(let i = 0; i < images.length; i++) {
        for(let j = 0; j < images[i].length; j++) {    
            if(images[i][j] == "" && (i != indexOfImageClicked[0] || j != indexOfImageClicked[1])) {
                images[i][j] = imageClicked;
            }
        }
    }
}

function uploadImage() {
    containerImages.innerHTML = "";
    for(let i = 0; i < images.length; i++) {
        for(let j = 0; j < images[i].length; j++) {
            if(images[i][j] != "") {
                let image = `
                    <div class="flex-r box-img">
                        <img class="flex-r" src="img/imageonline/${images[i][j]}.png" id="${images[i][j]}" alt="${images[i][j]}">
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

    console.log(1 in images)
    if(x-1 in images[y]) {
        if(images[y][x-1] == "") {
            return true;
        } 
    } 
    
    if(x+1 in images[y]) {
        if(images[y][x+1] == "") {
            return true;
        } 
    } 

    if(y+1 in images) {
        if(images[y+1][x] == "") {
            return true;
        } 
    } 
    
    if(y-1 in images) {
        if(images[y-1][x] == "") {
            return true;
        } 
    } 
    return false;

}