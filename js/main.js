const input = document.querySelector('#input');
const btnEnviar = document.querySelector('#btn-enviar');
const form = document.querySelector('#form');
const toDoList = document.querySelector('#todo-list');

eventListeners();

function eventListeners() {
    probando();
}

function probando() {
    input.addEventListener('click', () => {
        console.log('probando...')
    })
}