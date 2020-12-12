const inputField = document.getElementById('task__input');
const addingButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list')

addingButton.addEventListener('click', (e)=>{
    const itemToDo = document.createElement('div');
    itemToDo.classList.add('task');
    const itemTitle = document.createElement('div');
    itemTitle.classList.add('task__title');
    const deleteItem = document.createElement('a');
    deleteItem.classList.add('task__remove');
    deleteItem.setAttribute('href', '');
    deleteItem.innerText = '&times;';
    itemToDo.insertAdjacentElement('afterbegin', itemTitle);
    itemToDo.insertAdjacentElement('beforeend', deleteItem);
    itemTitle.innerText = inputField.value
    taskList.insertAdjacentElement('afterbegin', itemToDo)
    inputField.value = ''
    deleteItem.addEventListener('click', (e)=>{
        let tipToDelete = deleteItem.closest('.task')
        tipToDelete.parentNode.removeChild(tipToDelete)
        e.preventDefault()
    })
    e.preventDefault()
});

