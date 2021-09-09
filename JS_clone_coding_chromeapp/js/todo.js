const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];

const saveToDos = () =>{
    localStorage.setItem("todos",JSON.stringify(toDos));//localStorage에 toDos 값을 넣어준다
}//JSON.stringify 는 어떤것이라도 string으로 만들어준다

const deleteToDo = (event) =>{
    const li = (event.target.parentElement);
    li.remove();
}

const paintToDo = (newTodo) =>{
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;//텍스트를 span 안에 넣는다
    const button = document.createElement("button");
    button.innerText = "❌";//버튼안에 ❌를 넣어주는 것
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); //span을 li 안에 집어넣는다
    li.appendChild(button);
    toDoList.appendChild(li);
}

const handleToDoSubmit = (event)=> {//function handleToDoSubmit(event) 와 같다
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    toDos.push(newTodo);//newTodo를 toDos 배열에 push
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);