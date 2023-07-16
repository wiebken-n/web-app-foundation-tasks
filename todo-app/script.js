const textInput = document.querySelector(".text-todo-input");
const buttonAddTodo = document.querySelector(".button-add-todo");
const buttonRemoveTodo = document.querySelector(".button-remove-done-todos");
const checkboxAll = document.querySelector(".check-all-todos");
const checkboxOpen = document.querySelector(".check-open-todos");
const checkboxDone = document.querySelector(".check-done-todos");
const todoList = document.querySelector(".todo-list");

console.log(todoList);
console.log(buttonAddTodo);

const state = {
  todos: [{ description: "Add Todo", done: false }],
};

buttonAddTodo.addEventListener("click", function (event) {
  renderTodos();
});

function renderTodos() {
  // empty todo list
  todoList.innerText = "";
  state.todos.forEach((todo) => {
    const newTodoLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = todo.done;
    newTodoLi.appendChild(newCheckbox);
    const newTodoText = document.createTextNode(todo.description);
    newTodoLi.appendChild(newTodoText);
    todoList.appendChild(newTodoLi);
  });
}
