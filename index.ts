//Creating an interface
interface TodoList {
  todos: string[]
}

//Create a todoList object
const todoList : TodoList = {
  todos: []
}


const submit = document.querySelector("input[type='submit']") as HTMLInputElement;
const list = document.querySelector("ul") as HTMLUListElement;
const deleteButton = document.querySelector("input[type='button']") as HTMLButtonElement;

//Submit button event listener
submit.addEventListener("click", (e)=> {
  e.preventDefault();
  const input = document.querySelector("input[type='text']") as HTMLInputElement;
  addTodo(input.value);

  //reset value
  input.value = "";

  todoList.todos.map((todo) => {
    if(list.innerHTML.includes(todo)) return;
    list.innerHTML += `<li><input type="checkbox">${todo}</li>`;
  })
})

//Delete button event listener
deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  deleteTodo();

})

function addTodo(todo : string)  {
  if(todo === "" || todoList.todos.includes(todo)) return;
  todoList.todos.push(todo);
}

function deleteTodo() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
  checkboxes.forEach((checkbox) => {
    if(checkbox.checked) {
      const checked = checkbox.parentElement?.textContent;
      const index = todoList.todos.indexOf(checked!);
      todoList.todos.splice(index, 1);
      checkbox.parentElement?.remove();

    }
  })
  console.log(checkboxes);

}