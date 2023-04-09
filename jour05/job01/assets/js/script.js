const update = document.querySelector("#update");
const tbody = document.querySelector("#tbody");

update.addEventListener("click", () => {
    fetch("users.php")
    .then(response => response.json())
    .then(users => printUsers(users))
})

const printUsers = (data) => {
    tbody.innerHTML = "";
    for(let i = 0; i < data.length; i++) {
        user = `
        <tr class="content-box">
            <td>${data[i].id}</td>
            <td>${data[i].nom}</td>
            <td>${data[i].prenom}</td>
            <td>${data[i].email}</td>
        </tr>
        `

        tbody.innerHTML += user;
    }
}