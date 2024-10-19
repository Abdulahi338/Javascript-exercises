//synchronous

// function synchronous(){
//     alert("hey wiat some time 😁");
//     console.log(`inside the synchronous the function `)
// }

// console.log("after synchronous function");

// synchronous();
// console.log("by by")

function Asynchronous(){
    setTimeout(()=>{
        const car = {name:"hoomey",model:"last",year:"2023"}
    }, 5000)
}

console.log(Asynchronous())