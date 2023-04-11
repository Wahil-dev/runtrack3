export const validateEmail = (email) => {
    // regular expression to check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
    // return true if the email is valid, otherwise false
    return emailRegex.test(email);
}

export const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

export const process_input = (inp) => {
    inp = inp.trim();
    return inp;
}

export const moveToIndex = () => {
    window.location.href = "index.php";
}

export const moveToConnection = () => {
    window.location.href = "connexion.php";
}
