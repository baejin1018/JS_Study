const userDataList = [
  { id: 123, name: "곰" },
  { id: 1021, name: "사자" },
  { id: 6021, name: "여우" },
];

const searchIdInput = document.querySelector("#search-id-input");

const searchResult = document.querySelector("#search-result");

searchIdInput.addEventListener("keyup", () => {
  const searchId = Number(event.target.value);
  findUser(searchId);
});

function findUser(searchId) {
  const targetData = userDataList.find((data) => data.id === searchId);
  if (targetData == null) {
    searchResult.textContent = "유저 검색 결과 없음";
    return;
  }
  searchResult.textContent = targetData.name;
}
