const loginForm = document.querySelector("#login-form")
const loginInput =  document.querySelector("#login-form input");

const link = document.querySelector("a");
function onLoginSubmit(event){
    event.preventDefault();//브라우져의 기본동작을 멈춤
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);