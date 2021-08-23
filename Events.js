const title = document.querySelector("div.hello h1");

function handleTitleClick(){
    title.style.color ="blue";
    console.log("title was clicked");
}

function handleMouseEnter(){
    title.innerText ="Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
}
title.addEventListener("click", handleTitleClick);/*title 을 클릭했을때 handleTitleClick 실행*/
title.addEventListener("mouseenter",handleMouseEnter);/*마우스커서가 title위에 있으면 실행*/
title.addEventListener("mouseleave", handleMouseLeave);/*마우서커가 title 위에서 떠났을때 실행*/