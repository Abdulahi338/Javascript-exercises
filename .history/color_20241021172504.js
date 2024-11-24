
// get all 

const choose_color = document.querySelector('#choose');
const display_color =document.querySelector('.displaColor');
const color_history =document.querySelector('#color-history');
const ClearBtn =document.querySelector('#Clear');

choose_color.addEventListener('input',function(){
    const color =choose_color.value;
    console.log("the color is "color);
    display_color.Style.backgroundColor  =color;
})