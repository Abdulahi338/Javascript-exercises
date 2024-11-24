
const form = document.getElementById('to-doForm');
const textToDo = document.querySelector('#text-todo');
const list = document.querySelector('#display');

form.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const taskText = textToDo.value.trim();
    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        addDom(task);
        storeData(task)
        textToDo.value =''
        
    }

}
function addDom(task) {
    const newLi = document.createElement('li');
    newLi.className = `todo-item ${task.completed? "completed": ""}`;
    newLi.dataset.id = task.id;
    newLi.innerHTML = ` <input type="checkbox" class="compelete-check">
                <span class="task">${task.text}</span>
                <button class"edit-task">Edit</button>
                <button class"delete-task">Delete</button>`
                console.log(newLi);

    list.appendChild(newLi)
}

function storeData(task){
    localStorage.setItem(task)

}