// Correctly select the elements
const toglebtn = document.querySelector('.togle-btn'); // Select the first element with the class 'togle-btn'
const nav = document.querySelector('.nav'); // Select the first element with the class 'nav'

// Add event listener to the toggle button

    toglebtn.addEventListener('click', function () {
      
            nav.classList.toggle('add'); // Add or remove the 'active' class
        
    });
