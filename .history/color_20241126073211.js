
// get all 

const choose_color = document.querySelector('#choose');
const display_color =document.querySelector('#displaColor');
const color_history =document.querySelector('#color-history');
const ClearBtn =document.querySelector('.Clear');
const body = document.getElementBy

choose_color.addEventListener('input',function(){
    const color =choose_color.value;
    display_color.style.backgroundColor=color;

    // add color into the list
    addColor(color);

})

function addColor(color){
    const newColor = document.createElement('li');
    newColor.textContent =color;
    newColor.style.color =color;
    body.appendChild(newColor);

}

ClearBtn.addEventListener('click',function(){
    color_history.textContent='';
})