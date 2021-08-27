const h1 = document.querySelector("div.hello h1");

function handleTitleClick(){
    // const currenColor = h1.style.color;
    // let newColor;
    // if(currenColor === "blue"){
        // newColor = "tomato";
    // }
    // else{
        // newColor = "blue";
    // }
    // h1.style.color = newColor;
    const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
        // h1.classList.remove (clickedClass);
    // }
    // else{
        // h1.classList.add(clickedClass);
    // } 
    // toggle이랑 같은 기능의 코드
    h1.classList.toggle("clickedClass");// h1의 classList에 clicked 클래스가 있는지 확이하여 있으면 clicked 제거 없으면 추가
}

h1.addEventListener("click",handleTitleClick);