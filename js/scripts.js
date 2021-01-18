let addMessage = document.querySelector('#add-task'),
  addButton = document.querySelector('.add-task__button'),
  todo = document.querySelector('.taskboard__list');

let todoList = [];

if(localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

addButton.addEventListener('click', function(){

  let newTodo = {
    todo: addMessage.value,
    important: false
  };
todoList.push(newTodo);
displayMessages();
  
localStorage.setItem('todo', JSON.stringify(todoList));
});

// let taskEditor = document.querySelectorAll('.task__edit'),
//     taskInput = document.querySelector('.task__input'),
//     taskView = document.querySelectorAll('.task__view'); 
  
// for (let taskEdit of taskEditor) {
// taskEdit.onclick = function() {
//   for (let taskP of taskView) {
//         taskP.hidden = true;
//       }
//   }
// }



// document.querySelectorAll('.taskboard__list').addEventListener('click', function(e){
//   if (e.target.classList.contains('item_${i}'))
//   alert(e.target.innerText)
// })



function displayMessages(){
  let displayMessage = '';
  if(todoList.length === 0) todo.innerHTML = '';
  todoList.forEach(function(item, i){
    
    displayMessage += 
      `<div class="taskboard__item task">
        <div class="task__body">
          <p class="task__view" for='item_${i}'>${item.todo}</p>
          <input class="task__input item_${i}" type="text" value="${item.todo}">
        </div>
        <button class="task__edit task__edit  item_${i}" type="button" aria-label="Изменить"></button>
      </div>`;
    todo.innerHTML = displayMessage;
    
  });
};

