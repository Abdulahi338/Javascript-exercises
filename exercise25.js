// 25 spread

// const numbers =[1,2,3,4,5];
// const allNumbers =[...numbers,9,10,12,4]
// console.log(allNumbers)



//Rest
function mult(...num){
    return num.reduce((mul,N) => mul*N ,1);

}
console.log(mult(2,3));  