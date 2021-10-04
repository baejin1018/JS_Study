const playerNum = parseInt(prompt("몇 명이 참가하나요 ?"), 10);
alert(playerNum);
const yseOrNo = confirm("맞나요?");

const inputText = document.querySelector("#text");
const onClickButton = document.querySelector("#button");
const pWord = document.querySelector("#word");
const order = document.querySelector("#order");
let word; //제시어
let newWord; //새로입력한 단어

document.querySelector("#players").textContent = playerNum;

inputText.addEventListener("input", (event) => {
  newWord = event.target.value;
});

onClickButton.addEventListener("click", () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    //제시어가 비어있는 경우 or 끝글자와 새글자의 첫 글자가 같으면
    word = newWord;
    pWord.textContent = word;
    const mOrder = Number(order.textContent); //현재순서
    if (mOrder + 1 > playerNum) {
      //현재 순서가 참가 인원보다 많으면
      order.textContent = 1; // 순서를 1로 변경
    } else {
      order.textContent = mOrder + 1; //현재 순서 +1
    }
  } else {
    alert("올바르지 않은 단어 입니다");
  }
  inputText.value = ""; //입력칸안의 내용을 지움
  inputText.focus();
});
