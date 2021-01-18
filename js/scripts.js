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
      `<div class="taskboard__item task" draggable="true">
        <div class="task__body">
          <p class="task__view" for='item_${i}'>${item.todo}</p>
          <input class="task__input item_${i}" type="text" value="${item.todo}">
        </div>
        <button class="task__edit task__edit  item_${i}" type="button" aria-label="Изменить"></button>
      </div>`;
    todo.innerHTML = displayMessage;
    
  });
};



// Перемещение блоков

const list_items = document.querySelectorAll('.taskboard__item');
const lists = document.querySelectorAll('.taskboard__list');
const empty = document.querySelector('.task--empty');
const emptySecond = document.querySelector('.task--empty-second');
const emptyThird = document.querySelector('.task--empty-third');
const remove = document.querySelector('.button--clear');



let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener('dragstart', function(){
    draggedItem = this;
    setTimeout (function () {
      item.style.display = 'none';
      empty.style.display = 'block';
      emptySecond.style.display = 'block';
      emptyThird.style.display = 'block';
      

    }, 0)
    
  });

  item.addEventListener('dragend', function(){
    setTimeout(function () {
      draggedItem.style.display = 'flex';
      draggedItem = null;
      empty.style.display = ' none';
      emptySecond.style.display = ' none';
      emptyThird.style.display = ' none';
      
      
    }, 0); 
  })

  for (let j = 0; j < lists.length; j ++) {
    const list = lists[j];

    list.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    list.addEventListener('dragenter', function(e) {
      e.preventDefault();
      
    });

    list.addEventListener('drop', function(e){
      this.append(draggedItem);
      
    });
  }


}

