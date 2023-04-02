let container = $(".container");
let containerGame = $(".container-game");
let body = $(".body");
let startBtn = $("#melanger");
let imgs = $(".imgs").find("img");
let imgsTrueOrder = $(".imgs").find("img");
let errorGame = $(".error-game");
let gameStarted = false;
let compteur = 1;
let msg;


let reset = $("#reset");
reset.hide();

startBtn.on("click", () => {
    //melanger les images
    imgs.sort(() => Math.random() - 0.5);
    //ajouter les images melanger
    $(".imgs").append(imgs);
    //start game
    gameStarted = true;

    //cacher les erreurs s'il exist
    errorGame.hide();
    startBtn.hide();
    //afficher le button resset
    reset.show();
});

reset.click(() => {
    gameStarted = false;
    startBtn.show();
    reset.hide();
    compteur = 1;
    //rendre les images au bon ordre
    $(".imgs").append(imgsTrueOrder);

    msg.hide();

    //Vider le containerGame
    containerGame.empty();
})

for(let i = 1; i < 7; i++) {
    $(`#${i}`).on("click", () => {
        if(gameStarted) {
            //ajouter l'image selectionner
            containerGame.append($(`#${i}`));

            //Vérifier si ke box des images est vide
            if(compteur >= 6) {
                if(isWin()) {
                    msg = $("<p>Vous avez gagné</p>").css({color: 'green'});
                    container.append(msg);
                    console.log("<p>Vous avez gagné</p>")
                } else {
                    msg = $("<p>Vous avez perdu</p>").css({color: 'red'});
                    container.append(msg);
                    console.log("<p>Vous avez perdu</p>")
                }
            }
            compteur++;
        } else {
            errorGame.show();
        }
    })
}
function isWin() {
    for(let i = 1; i <= 6; i++) {
        let currentOrder = $(".container-game").find("img");

        //if currentImage.id != i 
        if(currentOrder[i-1].id != i) {
            console.log("perdue")
            return false;
        }
    }
    return true;
}
