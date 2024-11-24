const form = document.querySelector('#myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // get all elements
    const error = document.getElementById('error');

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#Password').value;
    const confermpassword = document.querySelector('#Password').value;
    console.log(name);

    if (name === '') {
        error.textContent = 'name is required';
        error.style.color = 'red';
        return
    }
    const chechEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(chechEmail)){
        error.textContent = "please enter avalid Email";
        error.style.color='red';
        return
    }
    if(password ==='' || ){
        error.textContent = "please enter a password";
        error.style.color='red';
        return

    }



    error.textContent = 'Registered succesfully..';
    error.style.color = 'green';

})