// Correctly select the elements
const toglebtn = document.querySelector('.togle-btn'); // Select the first element with the class 'togle-btn'
const nav = document.querySelector('.nav'); // Select the first element with the class 'nav'

// Add event listener to the toggle button

    toglebtn.addEventListener('click', function () {
        console.log("Toggle button clicked!");
        if (nav) { // Ensure the 'nav' element exists
            nav.classList.toggle('active'); // Add or remove the 'active' class
        
    });
