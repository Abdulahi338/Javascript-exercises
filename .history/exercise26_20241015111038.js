//synchronous

// function synchronous(){
//     alert("hey wiat some time 😁");
//     console.log(`inside the synchronous the function `)
// }

// console.log("after synchronous function");

// synchronous();
// console.log("by by")

function Asynchronous(callback){
    setTimeout(()=>{
        const car = {name:"hoomey",model:"last",year:2023}
        callback(car);
    }, 2000)
}

Asynchronous(function(car){
    console.log(car);

})

let  n =0;
while(n<10){
    console.log("somali");
    n++;

}
console.log("hey")
console.log("hey");
console.log("hey");