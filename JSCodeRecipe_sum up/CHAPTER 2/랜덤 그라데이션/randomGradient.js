const rectangle = document.querySelector(".rectangle");

const button = document.querySelector(".button");
button.addEventListener("click",onClickButton);

function onClickButton(){
    const randomHue = Math.trunc(Math.random() *360); /*Math.trunc : 값의 정수부분만 반환*/
    const randomColorStart = `hsl(${randomHue},100%,50%)`;
    const randomColorEnd = `hsl(${randomHue+100},100%,50%)`;

    rectangle.style.setProperty('--start',randomColorStart);
    rectangle.style.setProperty('--end',randomColorEnd);
}