import '../style/modern_normalize.css'
import '../style/style.css'
console.log('welcome to todo app')

let todoDataList = document.getElementById('todo-data-list');
let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-input-bar');
let todoWeight = document.getElementById("todo-input-weight");
let todos = [];
let deleteTodo = document.getElementById("todoDelete");
let getPendingTodosButton = document.getElementById("get-todos");
let todoReps = document.getElementById('todo-reps');



getPendingTodosButton.addEventListener("click",() => {
    todos = todos.filter((todo)=> todo.status != "Finished");
    reRenderTodos();
})

todoWeight.addEventListener('keyup',function toggleSaveButton(){

    let todoText = todoInputBar.value;
    let weightText = todoWeight.value;
    if(todoText.length == 0 && weightText.length == 0){
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
    let weightText = todoWeight.value;
    let repsText  = todoReps.value;
    if(todoText.length == 0 && weightText.length ==0) return;
    let todo = { text: todoText, status: "In Progress", finishButtonText : "Finished", weight : weightText, reps: repsText}
    todos.push(todo);
    addTodo(todo,todos.length);
    todoInputBar.value ='';
    todoWeight.value = '';
    todoReps.value = '';
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

function editTodo(event){
    let editButtonPressed = event.target;
    let indexToBeEdit = Number(editButtonPressed.getAttribute("todo-idx"));
    let detailDiv = document.querySelector(`div[todo-idx="${indexToBeEdit}"]`);
    let input = document.querySelector(`input[todo-idx="${indexToBeEdit}"]`);
    detailDiv.style.display = 'none';
    input.type = 'text';
    input.value = detailDiv.textContent;
}

function saveEditedTodos(event){
    console.log(event.keyCode);
    let input = event.target;
    let indexToBeEdit = Number(input.getAttribute("todo-idx"));
    let detailDiv = document.querySelector(`div[todo-idx="${indexToBeEdit}"]`);
    if(event.keyCode == 13){
        detailDiv.style.display = 'block';
        detailDiv.textContent = input.value;
        input.value ='';
        input.type = 'hidden';
    }
}

function addTodo(todo,todoNumber){
    let rowDiv = document.createElement('div');
    let hr = document.createElement('hr');
    let todoItem = document.createElement('div');
    let todoNo = document.createElement('div');
    let todoDetail = document.createElement('div');
    let todoWeight = document.createElement('div');

    let noOfSets = document.createElement('div');
    let todoReps_1 = document.createElement('input');
    let setsInputLablel_1 = document.createElement('label');

    let todoReps_2 = document.createElement('input');
    let setsInputLablel_2 = document.createElement('label');

    let todoReps_3 = document.createElement('input');
    let setsInputLablel_3 = document.createElement('label');


    let todoStatus = document.createElement('div');
    let todoAction = document.createElement('div');
    let DeleteButton = document.createElement('button');
    let finshedButton = document.createElement('button');
    let hiddenInput = document.createElement('input');
    let editButton = document.createElement('button');


    todoNo.textContent = `${todoNumber}.`;
    todoDetail.textContent = todo.text;
    todoWeight.textContent = todo.weight;
    
    setsInputLablel_2.textContent = todo.reps;
    setsInputLablel_3.textContent = todo.reps;
    setsInputLablel_1.textContent = todo.reps;

    todoStatus.textContent = todo.status;
    DeleteButton.textContent = 'Delete';
    finshedButton.textContent= todo.finishButtonText;
    editButton.textContent = 'Edit';
    hiddenInput.type = "hidden";

    // adding classes
    rowDiv.classList.add("row")
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center")
    todoNo.classList.add('todo-no');
    todoDetail.classList.add("todo-detail", "text-muted");
    todoWeight.classList.add('todo-weight',"text-muted")
    
    noOfSets.classList.add('todo-set',"btn-group","gap-1");
    todoReps_1.classList.add('todo-set',"btn-check");
    setsInputLablel_1.classList.add("btn" ,"btn-outline-primary");
    todoReps_2.classList.add('todo-set',"btn-check");
    setsInputLablel_2.classList.add("btn" ,"btn-outline-primary");
    todoReps_3.classList.add('todo-set',"btn-check");
    setsInputLablel_3.classList.add("btn" ,"btn-outline-primary");


    todoStatus.classList.add("todo-status", "text-muted");
    todoAction.classList.add("todo-actions", "d-flex", "gap-3");
    DeleteButton.classList.add("btn", "btn-danger","delete-todo");
    finshedButton.classList.add("btn", "btn-success","finish-todo");
    editButton.classList.add("btn", "btn-warning","finish-todo");
    hiddenInput.classList.add('form-control','todo-detail');

    //Adding attribute 
    finshedButton.setAttribute("todo-idx",todoNumber-1);
    DeleteButton.setAttribute("todo-idx",todoNumber-1);
    editButton.setAttribute("todo-idx",todoNumber -1);
    todoDetail.setAttribute('todo-idx',todoNumber -1);
    hiddenInput.setAttribute('todo-idx',todoNumber -1);

    todoReps_1.setAttribute("type",'checkbox');
    setsInputLablel_1.setAttribute("for",'btncheck1');
    todoReps_1.setAttribute("id",'btncheck1');

    todoReps_2.setAttribute("type",'checkbox');
    setsInputLablel_2.setAttribute("for",'btncheck2');
    todoReps_2.setAttribute("id",'btncheck2');

    todoReps_3.setAttribute("type",'checkbox');
    setsInputLablel_3.setAttribute("for",'btncheck3');
    todoReps_3.setAttribute("id",'btncheck3');

    // On click event listner
    DeleteButton.onclick = removeTodo;
    finshedButton.onclick = finshedTodo;
    editButton.onclick = editTodo;
    hiddenInput.onkeypress = saveEditedTodos;


    noOfSets.appendChild(todoReps_1);
    noOfSets.appendChild(setsInputLablel_1);

    noOfSets.appendChild(todoReps_2);
    noOfSets.appendChild(setsInputLablel_2);

    noOfSets.appendChild(todoReps_3);
    noOfSets.appendChild(setsInputLablel_3);

    todoAction.appendChild(DeleteButton);
    todoAction.appendChild(finshedButton);
    todoAction.appendChild(editButton);

    todoItem.appendChild(todoNo);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(hiddenInput);
    todoItem.appendChild(todoWeight);
    todoItem.appendChild(noOfSets);
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