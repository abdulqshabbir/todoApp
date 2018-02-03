const deleteButtons = Array.from(document.getElementsByTagName('span'));
const listItems = Array.from(document.getElementsByTagName('li'));
const myList = document.getElementById('myList');
const inputTodoField = document.getElementById('inputTodo');

inputTodoField.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {//enter key pressed
    const newTodoText = e.target.value; //todo typed by user
    e.target.value = ''; //reset todo input

    const newTodo = document.createElement('LI');
    const todoDeleteButton = document.createElement('SPAN');
    todoDeleteButton.textContent = ' X';

    newTodo.textContent = newTodoText;
    newTodo.appendChild(todoDeleteButton);
    myList.appendChild(newTodo);
    console.log(newTodo);
  }
});

myList.addEventListener('click', function(e) {

  if(e.target.tagName === 'LI') {
    //handle strike out events
    const listItem = e.target;
    toggleStrikeOut(listItem);
  }
  else if (e.target.tagName === 'SPAN') {
    //handle delete events
    const deleteButton = e.target;
    deleteListItem(deleteButton);
  }
});

function deleteListItem(deleteButton) {
  const clickedListItem = deleteButton.parentNode;
  clickedListItem.remove();
}

function toggleStrikeOut(listItem) {
  if(listItem.classList.contains('strikeOut')){
    listItem.classList.remove('strikeOut');
  }
  else {
      listItem.classList.add('strikeOut');
  }
}
