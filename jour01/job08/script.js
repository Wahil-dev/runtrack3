function sommenombrespremiers(num1, num2) {
    nombreDeDiviseur = 0;
    for(let i = 0; i < num1; i++) {
        if(nombreDeDiviseur <= 2) {
            if(num1 % i == 0) {
                nombreDeDiviseur++
            }
        } else {
            return false;
        }
    }

    for(let i = 0; i < num2; i++) {
        if(nombreDeDiviseur <= 2) {
            if(num2 % i == 0) {
                nombreDeDiviseur++
            }
        } else {
            return false;
        }
    }
    return num1 + num2;
}