const textInput = document.querySelector(".text-todo-input");
const buttonAddTodo = document.querySelector(".button-add-todo");
const buttonRemoveTodo = document.querySelector(".button-remove-done-todos");
const checkboxAll = document.querySelector(".check-all-todos");
const checkboxOpen = document.querySelector(".check-open-todos");
const checkboxDone = document.querySelector(".check-done-todos");
const todoList = document.querySelector(".todo-list");

let state = {
  todos: [{ description: "Add Todo", done: false, ID: 1 }],
  ID: 2,
};

window.addEventListener("load", (event) => {
  const loadStorage = JSON.parse(localStorage.getItem("storageState"));
  state = loadStorage;
  renderTodos();
});

// event listener for Add-todo button
buttonAddTodo.addEventListener("click", function (event) {
  const loadStorage = JSON.parse(localStorage.getItem("storageState"));
  state = loadStorage;

  // no button action if input is empty
  if (textInput.value === "") {
    return;
  }
  // check if todo of that description already exists - if yes, no action / empty input field
  for (let i = 0; i < state.todos.length; i++) {
    if (
      state.todos[i].description.toLowerCase() === textInput.value.toLowerCase()
    ) {
      textInput.value = "";
      return;
    }
  }

  saveTodo();
  renderTodos();
  const jsonState = JSON.stringify(state);
  localStorage.setItem("storageState", jsonState);
});

// remove done todos if button is clicked
buttonRemoveTodo.addEventListener("click", function (event) {
  removeTodos();
  const jsonState = JSON.stringify(state);
  localStorage.setItem("storageState", jsonState);
});

function renderTodos() {
  // empty redered list

  todoList.innerText = "";
  // render todo list
  state.todos.forEach((todo) => {
    // create new li with checkbox & description
    const newTodoLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newTodoText = document.createTextNode(todo.description);
    // assign ID to todo
    const newTodoID = state.ID;
    if (!Number.isInteger(todo.ID)) {
      todo.ID = newTodoID;
      state.ID++;
    }
    // render checkbox state
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.done;
    if (todo.done === true) {
      newTodoLi.classList.toggle("done-todo");
    }

    // add event listener to checkbox
    newCheckbox.addEventListener("change", function (event) {
      // save todo as done if box is checked
      todo.done = event.target.checked;
      // add strike-through-text class for (un)done todo
      newTodoLi.classList.toggle("done-todo");
    });

    // assign description of todo as name to li element
    newCheckbox.name = todo.description;
    // attach new li to todo-ul
    newTodoLi.appendChild(newCheckbox);
    newTodoLi.appendChild(newTodoText);
    todoList.appendChild(newTodoLi);
  });
  // empty text input
  textInput.value = "";
}

function saveTodo() {
  // initialize variable with text input
  const newTodo = textInput.value;
  // push todo description & undone state to state object
  state.todos.push({ description: newTodo, done: false });
}

// filter todo list and return undone todos
function removeTodos() {
  for (let i = 0; i < state.todos.length; i++) {
    if (state.todos[i].done === true) {
      state.todos.splice(i, 1);
    }
  }
  renderTodos();
}
