import * as lsData from './ls.js';
import * as utilData from './utilities.js';

let toDoList = [];
export {toDoList};

export default class Todos {
    constructor(id) {
        this.element = document.getElementById(id);
        this.key = id;
        toDoList = utilData.getToDo(this.key);
    }

    showToDoList(){
        utilData.renderToDoList(this.element, toDoList);
        this.addEventListeners();
    }

    addToDo(){
        const task = document.getElementById('task-input');
        if ( task.value != '') {
            utilData.saveToDo(task.value, this.key);
            task.value = '';
            this.showToDoList();
        }
    }

    completeToDo(itemId) {
        let task = toDoList.findIndex(task => task.id === +itemId);
        toDoList[task].completed = !toDoList[task].completed;
        lsData.writeToLS(this.key, toDoList);
        document.getElementById(itemId).classList.toggle('completed');
    }

    removeItem(itemID) {
        let task = toDoList.findIndex(task => task.id === +itemID);
        toDoList.splice(task, 1);
        lsData.writeToLS(this.key, toDoList);
        this.showToDoList();
    }

    addEventListeners() {
        const ls = Array.from(this.element.children);
        ls.forEach(item => {
            item.children[0].addEventListener('click', () =>  this.completeToDo(item.id) );
            item.children[2].addEventListener('click', () =>  this.removeItem(item.id)   );
        })
    }

    addTabListeners() {
        const actionButtons = Array.from(document.querySelectorAll('.tab'));
        actionButtons.forEach(tab => {
            tab.addEventListener('click', event => this.filterItems(event));
        });
    }

    filterItems(event) {
        const actionButtons = Array.from(document.querySelectorAll('.tab'));
        for (let btn of actionButtons) {
            btn.classList.remove('selected-tab');
        }

        event.currentTarget.classList.add('selected-tab');
        this.filterToDos(event.currentTarget.id);
    }

    filterToDos(category){
        category = utilData.filterBy(category);
        const f = toDoList.filter(task =>  (category != null) ? task.completed === category : task );
        utilData.renderToDoList(this.element, f);
        this.addEventListeners();
    }

}