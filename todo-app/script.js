const textInput = document.querySelector(".text-todo-input");
const buttonAddTodo = document.querySelector(".button-add-todo");
const buttonRemoveTodo = document.querySelector(".button-remove-done-todos");
const checkboxContainer = document.querySelector(".todo-selection-container");
const checkboxAll = document.querySelector(".check-all-todos");
const checkboxOpen = document.querySelector(".check-open-todos");
const checkboxDone = document.querySelector(".check-done-todos");
const todoList = document.querySelector(".todo-list");

const state = {};
let filteredTodos;

// ----------------------------------------------

// load state
window.addEventListener("load", (event) => {
  loadState();
  sortTodos();
  renderTodos();
});

// event listener for Add-todo button
buttonAddTodo.addEventListener("click", function (event) {
  // no button action if input is empty
  if (textInput.value.trim() === "") {
    return;
  }
  // check if todo of that description already exists - if yes, no action & empty input field
  for (let i = 0; i < state.todos.length; i++) {
    if (
      state.todos[i].description.toLowerCase() === textInput.value.toLowerCase()
    ) {
      textInput.value = "";
      return;
    }
  }

  saveTodo();
  sortTodos();
  renderTodos();
  saveState();
});

// render todo list according to checkbox state
checkboxContainer.addEventListener("change", function (event) {
  sortTodos();
  renderTodos();
});

// remove done todos if button is clicked
buttonRemoveTodo.addEventListener("click", function (event) {
  removeTodos();
  sortTodos();
  renderTodos();
  saveState();
});

//-------------------------------------------------------

function renderTodos() {
  // empty redered list

  todoList.innerText = "";
  sortTodos();
  // render todo list
  filteredTodos.forEach((todo) => {
    // create new li with checkbox & description
    const newTodoLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newTodoText = document.createTextNode(todo.description);

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
      saveState();
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
  const newTodo = textInput.value.trim();
  // initialize variable with current global ID
  const newTodoID = state.ID;
  // increment global ID
  state.ID++;
  // push todo description, undone state & ID to state object
  state.todos.push({ description: newTodo, done: false, ID: newTodoID });
}

// filter todo list and return undone todos
function removeTodos() {
  for (let i = 0; i < state.todos.length; i++) {
    if (state.todos[i].done === true) {
      state.todos.splice(i, 1);
      i--;
    }
  }
}

// sort todos according to current checkbox state
function sortTodos() {
  if (checkboxAll.checked) {
    filteredTodos = state.todos.filter((todo) => {
      return todo.done || !todo.done;
    });
    return filteredTodos;
  }
  if (checkboxOpen.checked) {
    filteredTodos = state.todos.filter((todo) => !todo.done);
    return filteredTodos;
  }
  if (checkboxDone.checked) {
    filteredTodos = state.todos.filter((todo) => todo.done);
    return filteredTodos;
  }
  if (!checkboxAll.checked && !checkboxDone.checked && !checkboxOpen.checked) {
    console.log("All");
    filteredTodos = state.todos.filter((todo) => {
      return todo.done || !todo.done;
    });
    console.log(filteredTodos);
    return filteredTodos;
  }
}

// load state from storage - if none present, initialize default state
function loadState() {
  if (localStorage.getItem("storageState") === null) {
    const defaultState = {
      todos: [{ description: "Add Todo", done: false, ID: 1 }],
      ID: 2,
    };
    Object.assign(state, defaultState);
    checkboxAll.checked = true;
  }
  const loadStorage = JSON.parse(localStorage.getItem("storageState"));
  Object.assign(state, loadStorage);
  checkboxAll.checked = true;
}

// save state to storage
function saveState() {
  const jsonState = JSON.stringify(state);
  localStorage.setItem("storageState", jsonState);
}
