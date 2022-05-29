import * as lsData from './ls.js';
import {toDoList} from './todos.js'


export function filterBy(category){
    switch(category){
        case 'active':
            return  false;
        case 'complete':
            return  true;
        case 'all':
            return  null;
        default :
            return  null;
    }
}

export function getToDo(key) {
    let ls = lsData.readFromLS(key);
    return ls === null ? [] : ls;
}

export function saveToDo(value, key) {
    let timestamp = Date.now();
    const newTodo = {id: timestamp, content: value, completed: false};
    toDoList.push(newTodo);
    lsData.writeToLS(key,toDoList);
}

export function renderToDoList(ul, ls) {
    ul.innerHTML = "";
    ls.forEach(taskObject => ul.innerHTML += renderOneToDo(taskObject) );
    updateCount(ls);
}

export function renderOneToDo(task) {
    return `<li id="${task.id}" ${task.completed ? 'class="completed"' : ''}>
        <input name="${task.content}" type="checkbox" value="none" ${task.completed ? 'checked' : ''}>
        <p>${task.content}</p>
        <div class="delete">Delete</div>
    </li>`;
}

export function updateCount(ls){
    document.getElementById('task-number').innerHTML = `${(ls != null) ? ls.length : 0}  tasks in list`;
}