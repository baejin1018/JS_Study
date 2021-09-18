const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

let toDos = []; // [{text: sdf, id: 1},{text: sdf, id: 13}]...

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage에 toDos 값을 넣어준다
}; //JSON.stringify 는 어떤것이라도 string으로 만들어준다

const deleteToDo = (event) => {
  console.log(event.target);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo.id !== li.id이 조건에 맞으면 남겨두고 조건에 맞지않으면 제외시킨다
  //parseInt를 쓰지않으면 li.id가 string이기 때문에 ToDo.id랑 다르기때문에 작동이 안된다
  saveToDos();
};

const paintToDo = (newTodo) => {
  const li = document.createElement("li");
  // <li><span>sdf</span><button>x</button></li>
  li.id = newTodo.id; //li의 id를 newTodo의 아이디로 변경
  const span = document.createElement("span");
  span.innerText = newTodo.text; //텍스트를 span 안에 넣는다
  const button = document.createElement("button");
  button.innerText = "❌"; //버튼안에 ❌를 넣어주는 것
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //span을 li 안에 집어넣는다
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  //function handleToDoSubmit(event) 와 같다
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //밀리초를 주는 함수 (랜덤한 아이디를 만들기위해 사용)
  };
  toDos.push(newTodoObj); //newTodo를 toDos 배열에 push
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

//const sayHello = (item) =>{
//    console.log("this is the turn on",item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 로컬스토리지가 비어 있지 않다면
  const parsedToDos = JSON.parse(savedToDos); // SON.stringify()와는 반대로 인수로 전달받은 문자열을 자바스크립트 객체로 변환하여 반환
  toDos = parsedToDos; //이전투두를 복원하기 위해
  parsedToDos.forEach(paintToDo); //for each 는 주어진 함수를 배열요소 각각에서 실행한다.
}
//const sayHello = (item) =>{
//    console.log("this is the turn on",item);
//}
//(item) => console.log("this is the turn of",item) 위에 코드랑 같은 뜻
