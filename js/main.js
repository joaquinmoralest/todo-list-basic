//Variables
const input = document.querySelector('#input');
const btnAdd = document.querySelector('#btn-add');
const form = document.querySelector('#form');
const toDoList = document.querySelector('#todo-list');

//Funciones
eventListeners();

function eventListeners() {
    btnAdd.addEventListener('click', addTask);
    removeTask();
};

function addTask() {

    if (input.value.length > 0) {
        const task = input.value;
        taskHTML(task)
    }

    form.reset();
};

function taskHTML(task) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btnRemove = document.createElement('button')

    div.classList.add('border', 'rounded', 'mt-3', 'mb-3', 'col-10', 'm-auto', 'bg-white');
    btnRemove.classList.add('btn', 'btn-danger', 'col-1');
    p.textContent = task;
    btnRemove.textContent = '-';

    div.appendChild(p);
    toDoList.appendChild(div);
    toDoList.appendChild(btnRemove);

};

function removeTask() {

};

function limpiar(e) {
    e.target.value = '';
}; 