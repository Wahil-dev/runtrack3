let containerImages = document.querySelector(".container-imgs");
const recommencerBtn = document.querySelector("#recommencer");

//const images = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", "logo9"];
const images = [
    ["", "morceaux-2"], 
    ["morceaux-3", "morceaux-4"]
];

let firstClick = 0;
let imageRemoved = "morceaux-1";
let imageIsCreated = false;
let indexOfImageClicked = []

document.addEventListener("click", () => {
    for(let i = 0; i < images.length; i++) {
        for(let j = 0; j < images[i].length; j++) {
            if(images[i][j] != "") {
                let image = document.querySelector(`#${images[i][j]}`);
                image.addEventListener("click", (e) => {
                    images[i][j] = "";  
                    indexOfImageClicked = [i, j]
                    moveImage(e, indexOfImageClicked)

                    //Upload images 
                    uploadImage();
                })
            }
        }
    }
})

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
    console.log(images)
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
                    <div class="flex-r box-img">
                    </div>
                `;
                containerImages.innerHTML += image;
                }
            }
    }
}
