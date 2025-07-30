//1. create a new element using createELement function
//2. insert required data in that element using .inner html or innertext
//3. insert new element in parent container using appendChild method or append
let todos=[
    {
  id: 234234,
  title: "Study"
},
{ id: 234235,
    title: "Exercise",
}

]
// let todo = {
//   id: 234234,
//   title: "Study"
// };
let todocontainer = document.querySelector(".todocontainer");
function addTodo(todo) {
  let li = document.createElement("li");
  li.className = "todo"; 
  li.innerHTML = `
    <div>
      <input type="checkbox" class="checkbox">
      <h1>${todo.title}</h1>
      <div>
        <button>❌</button>
        <button>➕</button>
      </div>
    </div>
  `
  todocontainer.appendChild(li);
  
}

function showAllToodos(todos){
    todos.forEach(todo=>{
        addTodo(todo)
    });
}
showAllToodos(todos);
