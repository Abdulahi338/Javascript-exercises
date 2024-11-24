const form = document.querySelector('#myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();

    // get all elements
    const error = document.getElementById('error');

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#name').value;
    const name = document.querySelector('#name').value;
    console.log(name);
    
    if(name === ''){
        error.textContent='name is required';
        error.style.color='red';
        return
    }


    error.textContent='Registered succesfully..';
    error.style.color='green';

})