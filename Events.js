const h1 = document.querySelector("div.hello h1");

function handleTitleClick(){
    h1.style.color ="blue";
    console.log("title was clicked");
}

function handleMouseEnter(){
    h1.innerText ="Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy(){
    alert("copy!");
}

function handleWindowOffLine(){
    alert("SoS no WIFI");
}

function handleWindowOnLine(){
    alert("ALL Good");
}
h1.addEventListener("click", handleTitleClick);/*title 을 클릭했을때 handleTitleClick 실행*/
// title.onclick = handleTitleClick; //위에 코드와 같은 의미
h1.addEventListener("mouseenter",handleMouseEnter);/*마우스커서가 title위에 있으면 실행*/
h1.addEventListener("mouseleave", handleMouseLeave);/*마우서커가 title 위에서 떠났을때 실행*/

window.addEventListener("resize",handleWindowResize); // window 창 크기가 변경되면 실행
window.addEventListener("copy",handleWindowCopy);//글자를 복사했을때 실행
window.addEventListener("offline",handleWindowOffLine);//오프라인일때
window.addEventListener("online",handleWindowOnLine);//온라인이 되었을때
