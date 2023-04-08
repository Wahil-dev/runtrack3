const filtrer = document.querySelector("#filtrer");
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");
const id = document.querySelector("#id");
const nom = document.querySelector("#nom");
const selectType = document.querySelector("#type");

let typesList = [];
let player;
//get types
fetch("pokemon.json")
.then(response => response.json())
.then(data => getType(data));

const filterData = (data) => {
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
        let type = data[i]["type"][0];
        let name = data[i].name["english"];
        player = `
        <tr class="player-box">
            <td>${data[i].id}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${data[i]["base"]["attack"]}</td>
            <td>${data[i]["base"]["Defense"]}</td>
            <td>${data[i]["base"]["Sp. Attack"]}</td>
            <td>${data[i]["base"]["Sp. Defense"]}</td>
            <td>${data[i]["base"]["Speed"]}</td>
        </tr>
        `
        //ID and Name and Type
        if(id.value != "" && nom.value != "" && selectType.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(id.value == data[i]["id"] && includes(data[i]["name"], nom.value) && data[i]["type"].includes(selectType.value)) {
                type = selectType.value;
                tbody.innerHTML += player;
            }
        } 
        
        //ID and Name
        else if(id.value != "" && nom.value != "") {
            if(id.value == data[i]["id"] && nom.value == data[i]["name"]) {
                tbody.innerHTML += player;
            }
        } 

        //ID and Type
        else if(id.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(id.value == data[i]["id"] && data[i]["type"].includes(selectType.value)) {
                type = selectType.value;
                tbody.innerHTML += player;
            }
        } 

        //name and Type
        else if(nom.value != "" && selectType.value != "") {
            //utiliser le type que l'utilisateur a entrer
            if(nom.value == data[i]["nom"] && data[i]["type"].includes(selectType.value)) {
                type = selectType.value;
                tbody.innerHTML += player;
            }
        } 

        //id
        else if(id.value != "") {
            if(id.value == data[i]["id"]) {
                tbody.innerHTML += player;
            }
        } 

        //name
        else if(nom.value != "") {
            if(includes(data[i]["name"], nom.value)) {
                tbody.innerHTML += player;
            }
        } 

        //type
        else if(selectType.value != "") {
            console.log(selectType.value, data[i]["type"])
            console.log(data[i]["type"].includes(selectType.value))
            if(data[i]["type"].includes(selectType.value)) {
                tbody.innerHTML += player;
            }
        } 

        else {
            tbody.innerHTML += player;
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
    console.log(object)
    for(const [key, value] in Object.entries(object)) {
        if(value == name) {
            return true;
        }
    }
    return false;
}