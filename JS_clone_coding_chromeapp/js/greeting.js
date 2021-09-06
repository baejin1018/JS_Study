const loginForm = document.querySelector("#login-form")
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();//브라우져의 기본동작을 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME);//Log In 버튼을 누르면 form 을 숨김
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);//username에 사용자가 적은 이름을 저장
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = "Hello " + username;//'Hello ${username}`;=
    greeting.classList.remove(HIDDEN_CLASSNAME);//greeting에 있는  hidden을 삭제
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(saveUsername);
}