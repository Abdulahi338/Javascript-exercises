
const form =document.getElementById('to-doForm');
const textToDo =document.querySelector('#text-todo');
const list = document.querySelector('#display');

form.addEventListener('submit',addTask);

function addTask(e){
    e.preventDefault();
    textToDo
    const text =textToDo.value;
    console.log(text)
}