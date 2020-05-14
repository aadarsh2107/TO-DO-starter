/*<div class="todo-item">
</div>*/

var todolist=document.getElementById("todo-list-adding")
console.log("adca")
function getTodoFromLocalStorage(){
    var storeTodolist=JSON.parse(localStorage.getItem("todo-list"))
    storeTodolist=storeTodolist=== null? []:storeTodolist
    return storeTodolist

}
function renderTodoFromLocalStorage(){
    var todoListLocalStorage=getTodoFromLocalStorage()
    if(todoListLocalStorage!==[]){
        for(var i=0;i<todoListLocalStorage.length;i++)
        
        todolist.insertBefore(renderCreatecard(todoListLocalStorage[i].message,todoListLocalStorage[i].id),todolist.firstElementChild)
    }
}
renderTodoFromLocalStorage()
function  renderCreatecard(msg,id){
    console.log(msg)

    var todoListLocalStorage=getTodoFromLocalStorage()
    var mainCard=document.createElement('div');
    mainCard.className='todo-item';
    mainCard.id=id
    var message=document.createElement('h3');
    message.innerHTML=msg;
    message.className='todo-message';
    mainCard.appendChild(message);
    var deleteIcon =document.createElement('i')
    deleteIcon.className="fas fa-minus-circle"
    deleteIcon.onclick= function () {
        var selectedElementForDelete=document.getElementById(mainCard.id)
        console.log(selectedElementForDelete)
        selectedElementForDelete.remove()
    
    }
    mainCard.appendChild(deleteIcon)
    return mainCard
}
function createcard(msg){
    var todoListLocalStorage=getTodoFromLocalStorage()
var mainCard=document.createElement('div');
mainCard.className='todo-item';
mainCard.id="todo"+(todoListLocalStorage.length + 1)
var message=document.createElement('h3');
message.innerHTML=msg;
message.className='todo-message';
mainCard.appendChild(message);
var deleteIcon =document.createElement('i')
deleteIcon.className="fas fa-minus-circle"
deleteIcon.onclick= function () {
    var selectedElementForDelete=document.getElementById(mainCard.id)
    console.log(selectedElementForDelete)
    selectedElementForDelete.remove()

}
mainCard.appendChild(deleteIcon)
var theStore={
    id:mainCard.id,
    message:message.innerHTML
}


todoListLocalStorage.push(theStore);
localStorage.setItem("todo-list",JSON.stringify(todoListLocalStorage))
console.log(theStore)
console.log(todoListLocalStorage)
return mainCard

}
var todolist=document.getElementById('todo-list-adding')
var inputField=document.getElementById('todo-input-field')
inputField.onkeyup = function(e){
    if(e.key ==='Enter' && inputField.value!="")
        {
//todolist.appendChild(createcard())
//inputField.value=''
todolist.insertBefore(createcard(inputField.value),todolist.firstElementChild)
inputField.value=''
        }
    
}
var todoform=document.getElementById('login-id')
todoform.onsubmit=function(e){
    e.preventDefault();
}