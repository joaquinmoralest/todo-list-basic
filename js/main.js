//Variables
const input = document.querySelector('#input');
const btnAdd = document.querySelector('#btn-add');
const form = document.querySelector('#form');
const toDoList = document.querySelector('ul');

//Funciones
eventListeners();

function eventListeners() {
    btnAdd.addEventListener('click', addTask);
    input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            addTask();
        }
    });
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
    const li = document.createElement('li');
    const p = document.createElement('p');
    const btnRemove = document.createElement('button')

    li.classList.add('list-group-item', 'col-12', 'd-flex', 'justify-content-between', 'align-items-center');
    p.textContent = task;
    btnRemove.classList.add('btn', 'btn-danger');
    btnRemove.textContent = 'X';

    li.appendChild(p);
    li.appendChild(btnRemove);
    toDoList.appendChild(li);

    btnRemove.addEventListener('click', removeTask);

};

function removeTask(e) {
    const item = e.target.parentElement;
    toDoList.removeChild(item);
};

