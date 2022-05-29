import Todos from './todos.js';

// Create list object
const todo = new Todos('task-list');

// Load localstorage
window.addEventListener('load', () => {
    todo.showToDoList();
    todo.addTabListeners();
// Add task when + is clicked
    const newTask = document.getElementById('add-task');
    newTask.addEventListener('click', () =>  todo.addToDo() );
});