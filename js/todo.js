const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY  , JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id ;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "×"
    button.addEventListener("click" , deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);  
}

function todoSubmit(event) {
    event.preventDefault();
    // newTodo에 변수값 복사해놓기  
    const newTodo = todoInput.value; 
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", todoSubmit)



const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
     const parsedTodos = JSON.parse(savedTodos);
     toDos = parsedTodos;
     parsedTodos.forEach(paintTodo);
}


const showTodoButton = document.getElementById("show-todo-button");
const todoContainer = document.getElementById("todo-container");

showTodoButton.addEventListener("click", function () {
  // todoContainer의 display 속성을 토글합니다.
  if (todoContainer.style.display === "none") {
    todoContainer.style.display = "block";
  } else {
    todoContainer.style.display = "none";
  }
});
