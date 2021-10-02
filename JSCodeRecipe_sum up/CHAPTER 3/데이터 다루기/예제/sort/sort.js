const userDataList = [
  { id: 2, name: "곰" },
  { id: 10, name: "여우" },
  { id: 4, name: "사자" },
  { id: 29, name: "기린" },
  { id: 101, name: "호랑이" },
];

function updateList() {
  let listHtml = "";

  for (const data of userDataList) {
    listHtml += `<li>${data.id} : ${data.name}</li>`;
  }
  document.querySelector(".user_list").innerHTML = listHtml;
}

function sortByAscending() {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });

  updateList();
}

function sortByDescending() {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });

  updateList();
}

document.querySelector(".ascending").addEventListener("click", () => {
  sortByAscending();
});

document.querySelector(".descending").addEventListener("click", () => {
  sortByDescending();
});

sortByAscending();
