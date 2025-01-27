const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "game_todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.closest("li");
  li.style.animation = "slideIn 0.3s ease reverse";
  setTimeout(() => {
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
  }, 300);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "×";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

const showTodoButton = document.getElementById("show-todo-button");
const todoContainer = document.getElementById("todo-container");

showTodoButton.addEventListener("click", function () {
  if (todoContainer.style.display === "none") {
    todoContainer.style.display = "block";
    showTodoButton.style.transform = "scale(0.9)";
  } else {
    todoContainer.style.display = "none";
    showTodoButton.style.transform = "scale(1)";
  }
});
