const form = document.querySelector('#myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();

    // get all elements
    const error = document.getElementById('error');

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(name);
    
    if(name === ''){
        error.textContent='name is required';
        error.style.color='red';
        return
    }
    const chechEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



    error.textContent='Registered succesfully..';
    error.style.color='green';

})