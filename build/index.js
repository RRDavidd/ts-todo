"use strict";
//Create a todoList object
const todoList = {
    todos: []
};
const submit = document.querySelector("input[type='submit']");
const list = document.querySelector("ul");
const deleteButton = document.querySelector("input[type='button']");
//Submit button event listener
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    addTodo(input.value);
    //reset value
    input.value = "";
    todoList.todos.map((todo) => {
        if (list.innerHTML.includes(todo))
            return;
        list.innerHTML += `<li><input type="checkbox">${todo}</li>`;
    });
});
//Delete button event listener
deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteTodo();
});
function addTodo(todo) {
    if (todo === "" || todoList.todos.includes(todo))
        return;
    todoList.todos.push(todo);
}
function deleteTodo() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        var _a, _b;
        if (checkbox.checked) {
            const checked = (_a = checkbox.parentElement) === null || _a === void 0 ? void 0 : _a.textContent;
            const index = todoList.todos.indexOf(checked);
            todoList.todos.splice(index, 1);
            (_b = checkbox.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        }
    });
    console.log(checkboxes);
}
