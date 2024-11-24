const form = document.querySelector('#myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();

    // get all elements

    const name = document.querySelector('#name');
    console.
    if(name === ''){
        error.textContent='name is required';
        error.style.color='red';
        return
    }


    const error = document.getElementById('error');
    error.textContent='Registered succesfully..';
    error.style.color='green';

})