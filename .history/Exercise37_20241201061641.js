const titleText =document.getElementsByClassName('title');
const img = document.querySelector('.img');
const textarea = document.querySelector('textarea');
const form = document.querySelector('#blog');

const addBtn =document.querySelector('.add');
form.addEventListener('submit',addTask);
function addTask(e){
    e.preventDefault();
    const title = titleText.value.trim();
    
    console.log(title)
    
}