const body = document.querySelector("#body");

// Détection du code konami
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konami = false;
var konamiIndex = 0;

document.addEventListener("keydown", (event) => {
    if(event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if(konamiIndex == konamiCode.length) {
            konami = true;
            body.classList.add("konami");
            alert("code valide !")
        }
    } else {
        konamiIndex = 0;
        alert("code n'est pas valide !")
    }
})
console.log(konamiCode)
