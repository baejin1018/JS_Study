const loginForm = document.querySelector("#login-form")
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();//브라우져의 기본동작을 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME);//Log In 버튼을 누르면 form 을 숨김
    const username = loginInput.value;
    greeting.innerText = "Hello" + username;//'Hello ${username}`;=="Hello" + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);