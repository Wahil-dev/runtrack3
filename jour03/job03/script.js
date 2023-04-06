let containerImages = document.querySelector(".container-imgs");
let msg = document.querySelector(".msg");
const restartBtn = document.querySelector("#restartBtn");
const next = document.querySelector("#next");
let stage = 0;

let images;
getImages();

let widthImage;

let imagesCopy;
let imageRemoved = images[0][0];
let start = false;
let indexOfImageClicked = []
let tableOfIndexUsed = [];
//Draw images game
drawImage();

containerImages.addEventListener("click", (e) => {    
    console.log(stage)
    if(!start) {
        images[0][0] = "";
        imagesCopy = JSON.parse(JSON.stringify(images));
        
        //Mélanger le tableaux d'images
        imagesCopy = random(imagesCopy);
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
    getImages();
    widthImage = `${containerImages.offsetWidth / images[0].length - 2}px`;
    
    containerImages.innerHTML = "";
    for(let y = 0; y < images.length; y++) {
        for(let x = 0; x < images[y].length; x++) {
            let image = `
                <div class="flex-r box-img" style="width:${widthImage}">
                    <img class="flex-r img" src="img/${images[y][x]}.png" id="${images[y][x]}" alt="${images[y][x]}">
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
        msg.style.display = "block";
    }
}

function uploadImage() {
    containerImages.innerHTML = "";
    for(let i = 0; i < imagesCopy.length; i++) {
        for(let j = 0; j < imagesCopy[i].length; j++) {
            if(imagesCopy[i][j] != "") {
                let image = `
                    <div class="flex-r box-img" style="width:${widthImage}">
                        <img class="flex-r img" src="img/${imagesCopy[i][j]}.png" id="${imagesCopy[i][j]}" alt="${imagesCopy[i][j]}">
                    </div>
                `;
                containerImages.innerHTML += image;
            } else {
                let image = `
                    <div class="flex-r box-img" style="width:${widthImage}"></div>
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

const restart = () => {
    msg.style.display = "none";
    start = false;
    images[0][0] = imageRemoved;
    tableOfIndexUsed = [];
    drawImage()
}

const random = (table) => {
    const newTable = [];
    let row = [];
    let lengthOfTable = table.length * table[0].length;
    let lengthOfNewTable = newTable.length;

    while(lengthOfNewTable < lengthOfTable) {
        for(let y = 0; y < table.length; y++) {
            lengthOfNewTable = getLengthOfTable(newTable)
            //if(newTable.length < table.length) newTable.push([]);

            for(let x = 0; x < table[y].length; x++) {
                let randomY = Math.floor(Math.random() * table.length);
                let randomX = Math.floor(Math.random() * table[0].length);
                let index = [randomY, randomX];

                if(notInTable(index)) {
                    row.push(table[randomY][randomX]);
                    tableOfIndexUsed.push(index);
                }

                if(row.length == table[0].length) {
                    newTable.push(row);
                    row = [];
                }
            }
        }
    }
    return newTable;
}

const notInTable = (index) => {
    if(tableOfIndexUsed.length == 0) {
        return true;
    } else {
        for(let i = 0; i < tableOfIndexUsed.length; i++) {
            if(tableOfIndexUsed[i][0] == index[0] && tableOfIndexUsed[i][1] == index[1]) {
                return false;
            }
        }
    }
    return true;
}

const getLengthOfTable = (table) => {
    let length = 0;
    for(let y = 0; y < table.length; y++) {
        length += table[y].length 
    }
    return length;
}

const nextGame = () => {
    stage++;
    restart();
}

function getImages() {
    switch (stage) {
        case 0:
            images = [
                ["morceaux-1", "morceaux-2"], 
                ["morceaux-3", "morceaux-4"]
            ];
            break;
        case 1:
            images = [
                ["logo1", "logo4", "logo7"],
                ["logo2", "logo5", "logo8"], 
                ["logo3", "logo6", "logo9"]
            ];
            break;
        default:
            images = [
                ["morceaux-1", "morceaux-2"], 
                ["morceaux-3", "morceaux-4"]
            ];
            break;
    }   
}

restartBtn.addEventListener("click", restart);
next.addEventListener("click", nextGame);
