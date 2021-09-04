const clock = document.querySelector("h2#clock");

function getClock(){
    const data = new Date();
    const houes = String(data.getHours()).padStart(2,"0");// padstart(길이,길이에 안맞을때 넣을 값) 만약 padStart(2,"0") 인데 값이 1이라면 01이 된다 padEnd는 padEnd(2,"0")때 10이 된다
    const minutes = String(data.getMinutes()).padStart(2,"0");
    const second =String(data.getSeconds()).padStart(2,"0");
    clock.innerText =`${houes}:${minutes}:${second}`; 
}

getClock();
setInterval(getClock, 1000);