
// get all 

const choose_color = document.querySelector('#choose-color');
const display_color =document.querySelector('#display-color');
const color_history =document.querySelector('#color-history');
const ClearBtn =document.querySelector('#Clear');

choose_color.addEventListener('input',function(){
    const color =choose_color.Value;
    console.lo
    display_color.Style.backgroundColor =color;
})