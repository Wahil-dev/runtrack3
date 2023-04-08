const filtrer = document.querySelector("#filtrer");
const result = document.querySelector(".result");
const form = document.querySelector("#form");
const id = document.querySelector("#id");
const nom = document.querySelector("#nom");
const selectType = document.querySelector("#type");

let typesList = [];
//get types
fetch("pokemon.json")
.then(response => response.json())
.then(data => getType(data));

const filterData = (data) => {
    for(let i = 0; i < data.length; i++) {

    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("pokemon.json")
    .then(response => response.json())
    .then(jsonData => filterData(jsonData));
});


const getType = (data) => {
    for(let i = 0; i < data.length; i++) {
        let types = data[i]["type"];
        //get type of object
        for(let i = 0; i < types.length; i++) {
            if(!typesList.includes(types[i])) {
                let option = `<option value="${types[i]}">${types[i]}</option>`;
                selectType.innerHTML += option;
                //ajouter ce type au list des types
                typesList.push(types[i]);
            }
        }
    }
}