// import '../style/modern_normalize.css'
// import '../style/style.css'

console.log('welcome to todo app')

let todoDataList = document.getElementById('todo-data-list');
let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-input-bar');
let todos = [];
let deleteTodo = document.getElementById("todoDelete");


todoInputBar.addEventListener('keyup',function toggleSaveButton(){

    let todoText = todoInputBar.value;
    if(todoText.length == 0){
        if(saveButton.classList.contains('disabled')) return;
        saveButton.classList.add('disabled');
    }
    else if(saveButton.classList.contains('disabled')){
        saveButton.classList.remove('disabled');
    }
})

function reRenderTodos(){
    todoDataList.innerHTML ='';
    todos.forEach((element,idx)=>{
        addTodo(element,idx+1);
    })
}

saveButton.addEventListener('click',()=>{
    let todoText = todoInputBar.value;
    if(todoText.length == 0) return;
    let todo = { text: todoText, status: "In Progress", finishButtonText : "Finished"}
    todos.push(todo);
    addTodo(todo,todos.length);
    todoInputBar.value =''
})

function finshedTodo(event){
    let finshedButtonPressed = event.target;
    let indexToBeFinshed = Number(finshedButtonPressed.getAttribute("todo-idx"));
    if(todos[indexToBeFinshed].finishButtonText == "Finished"){
        todos[indexToBeFinshed].status = "Finished";
        todos[indexToBeFinshed].finishButtonText = "Undo";
    }
    else{
        todos[indexToBeFinshed].status = "In Progress";
        todos[indexToBeFinshed].finishButtonText = "Finished";
    }

    todos.sort((a,b) =>{
        if(a.status == "Finished"){
            return 1;
        }
        return -1;
    })
    reRenderTodos();
}

function removeTodo(event){
    // console.log('clicked delete');
    // event.target.parentElement.parentElement.parentElement.remove();
    let DeleteButtonPressed = event.target;
    let indexToBeRemoved = Number(DeleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexToBeRemoved,1);
    reRenderTodos();
}

function addTodo(todo,todoNumber){
    let rowDiv = document.createElement('div');
    let hr = document.createElement('hr');
    let todoItem = document.createElement('div');
    let todoNo = document.createElement('div');
    let todoDetail = document.createElement('div');
    let todoStatus = document.createElement('div');
    let todoAction = document.createElement('div');
    let DeleteButton = document.createElement('button');
    let finshedButton = document.createElement('button');

    todoNo.textContent = `${todoNumber}.`;
    todoDetail.textContent = todo.text;
    todoStatus.textContent = todo.status;
    DeleteButton.textContent = 'Delete';
    finshedButton.textContent= todo.finishButtonText;

    // adding classes
    rowDiv.classList.add("row")
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center")
    todoNo.classList.add('todo-no');
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoAction.classList.add("todo-actions", "d-flex", "gap-3");
    DeleteButton.classList.add("btn", "btn-danger","delete-todo");
    finshedButton.classList.add("btn", "btn-success","finish-todo");

    //finshed todo
    finshedButton.setAttribute("todo-idx",todoNumber-1);
    DeleteButton.setAttribute("todo-idx",todoNumber-1);
    DeleteButton.onclick = removeTodo;
    finshedButton.onclick = finshedTodo;


    todoAction.appendChild(DeleteButton);
    todoAction.appendChild(finshedButton);

    todoItem.appendChild(todoNo);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoAction);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);
}

// let getTodoButton = document.getElementById('save-todo');
// getTodoButton.onclick = addTodo;





























// let getTodoButton = document.getElementById('save-todo');
// So, in summary:

// Event: Click event on the 'save-todo' button.
// Event Handler: Arrow function that logs "clicked" to the console.
// Event Listener: addEventListener method that listens for the 'click' event on the 'save-todo' button and triggers the attached event handler.
// getTodoButton.addEventListener('click',() =>{
//     console.log("clicked")
// })