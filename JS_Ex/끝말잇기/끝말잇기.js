const playerNum = parseInt(prompt("몇 명이 참가하나요 ?"), 10);
alert(playerNum);
const yseOrNo = confirm("맞나요?");

const inputText = document.querySelector("#text");
const onClickButton = document.querySelector("#button");
const pWord = document.querySelector("#word");
const order = document.querySelector("#order");
let word; //제시어
let newWord; //새로입력한 단어

inputText.addEventListener("input", (event) => {
  newWord = event.target.value;
});

onClickButton.addEventListener("click", () => {
  if (!word) {
    //제시어가 비어있는 경우
    word = newWord;
    pWord.textContent = word;
    input.value = ""; //입력칸안의 내용을 지움

    const mOrder = Number(order.textContent); //현재순서
    if(order+1 = playerNum)){

    }else{

    }
  } else {
    //비어있지 않은 경우
    if (word[word.length - 1] === newWord[0]) {
      // 제시어의 끝글자가 새로운 글자의 첫글자와 같은지
      word = newWord;
      pWord.textContent = word;
      input.value = ""; //입력칸안의 내용을 지움
    } else {
    }
  }
});
