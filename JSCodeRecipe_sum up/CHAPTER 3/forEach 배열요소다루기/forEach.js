const userList = [
    { id: 1, name: "곰", adress: "서울"},
    { id: 2, name: "여우", adress: "대전"},
    { id: 3, name: "사자", adress: "부산"}
];

const container = document.querySelector(".container");

userList.forEach((userData) => {
    container.innerHTML += `
    <div class="card">
        <h2>${userData.name}</h2>
        <p>지역 : ${userData.adress}</p>
    </div>`
})