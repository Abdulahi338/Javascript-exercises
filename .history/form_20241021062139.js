const form = document.querySelector('#myForm');

form.addEventListener('submit',function(event){
    event.preventDefault();


    const error = document.getElementById('error');
    error.textContent='Registered succesfully..';
    

})