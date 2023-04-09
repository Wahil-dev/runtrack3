const filtrer = document.querySelector("#filtrer");
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");
const id = document.querySelector("#id");
const nom = document.querySelector("#nom");
const selectType = document.querySelector("#type");

let typesList = [];
let pokemon;
//get types
fetch("pokemon.json")
.then(response => response.json())
.then(data => getType(data));

const filterData = (data) => {
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
        pokemon = `
        <tr class="pokemon-box">
            <td>${data[i].id}</td>
            <td>${data[i].name["english"]}</td>
            <td>${data[i]["type"][0]}</td>
            <td>${data[i]["base"]["Attack"]}</td>
            <td>${data[i]["base"]["DefensNamee"]}</td>
            <td>${data[i]["base"]["Sp. Attack"]}</td>
            <td>${data[i]["base"]["Sp. Defense"]}</td>
            <td>${data[i]["base"]["Speed"]}</td>
        </tr>
        `
        //ID and Name and Type
        if(id.value != "" && nom.value != "" && selectType.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(id.value == data[i]["id"] && includes(data[i]["name"], nom.value) && data[i]["type"].includes(selectType.value)) {
                tbody.innerHTML += pokemon;
            }
        } 
        
        //ID and Name
        else if(id.value != "" && nom.value != "") {
            if(id.value == data[i]["id"] && includes(data[i]["name"], nom.value)) {
                tbody.innerHTML += pokemon;
            }
        } 

        //ID and Type
        else if(id.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(id.value == data[i]["id"] && data[i]["type"].includes(selectType.value)) {
                tbody.innerHTML += pokemon;
            }
        } 

        //name and Type
        else if(nom.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(nom.value == data[i]["nom"] && data[i]["type"].includes(selectType.value)) {
                tbody.innerHTML += pokemon;
            }
        } 

        //id
        else if(id.value != "") {
            if(id.value == data[i]["id"]) {
                tbody.innerHTML += pokemon;
            }
        } 

        //name
        else if(nom.value != "") {
            if(includes(data[i]["name"], nom.value)) {
                tbody.innerHTML += pokemon;
            }
        } 

        //type
        else if(selectType.value != "") {
            if(data[i]["type"].includes(selectType.value)) {
                tbody.innerHTML += pokemon;
            }
        } 

        else {
            tbody.innerHTML += pokemon;
        }
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch("pokemon.json")
    .then(response => response.json())
    .then(jsonData => filterData(jsonData));
});


const getType = (data) => {
    console.log(data);
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

const includes = (object, name) => {
    for(const [key, value] of Object.entries(object)) {
        if(value == name) {
            return true;
        }
    }
    return false;
}
