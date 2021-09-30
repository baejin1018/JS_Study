let userDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

document.querySelectorAll(".button").forEach((element) => {
  element.addEventListener("click", (event) => {
    onClickButton(event);
  });
});

function onClickButton(event) {
  const button = event.target;
  const targetAge = button.dataset.age;
  const filterdList = userDataList.filter((data) => data.age >= targetAge);
  updateList(filterdList);
}

function show(filterdList) {
  let listHtml = "";

  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}세 </li>`;
  }

  document.querySelector(".user_list").innerHTML = listHtml;
}
(function updateList2(filterdList) {
  show(userDataList);
})(userDataList);

function updateList(filterdList) {
  show(filterdList);
}
