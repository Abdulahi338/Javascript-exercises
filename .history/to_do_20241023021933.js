
const form =document.getElementById('to-doForm');
const textToDo =document.querySelector('#text-todo');
const list = document.querySelector('#display');

form.addEventListener('submit',addTask);

function addTask(e){
    e.preventDefault();
   
    const text =textToDo.value.trim();
    if(text !==''){
        const task ={
            id:Date.now();
            text:text
        }
    }
    textToDo.value ='';
}