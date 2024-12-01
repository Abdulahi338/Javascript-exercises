const titleText =document.getElementsByClassName('title');
const img = document.querySelector('.img');
const textarea = document.querySelector('textarea');
const form = document.querySelector('#blog');

const addBtn =document.querySelector('.add');
form.addEventListener('submit',addTask);
function addTask(e){
    e.preventDefault();
    const title = titleText.value.trim();
    const message = textarea.value.trim();
    addToDom(title,message)
    
}

function addToDom(task,message,img){
    const blog = {
        id = Date.now();
        title = 
    }
}
