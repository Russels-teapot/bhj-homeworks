const inputField = document.getElementById('task__input');
const addingButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list')
const itemToDo = document.createElement('div');
itemToDo.classList.add('task');
const itemTitle = document.createElement('div');
itemTitle.classList.add('task__title');
const deleteItem = document.createElement('a');
deleteItem.classList.add('task__remove');
deleteItem.setAttribute('href', '""');
itemToDo.insertAdjacentElement('afterbegin', itemTitle);
itemToDo.insertAdjacentElement('beforeend', deleteItem);
addingButton.addEventListener('click', ()=>{
    itemTitle.innerText = inputField.value
    taskList.insertAdjacentElement('afterbegin', itemToDo)
})