// //
// async function fetchData() {
//     console.log("we are fetch your data!!")
//     const data = await fetch('./example.json')
//     const jsonData = await data.json();
//         console.log(jsonData)
  
   
    
// }

// fetchData()

// async function fechdataHttp() {
//     //get method
//     try{
//         console.log("Fetching data starts.......👁️👁️");
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             console.log("erorr is detected")
           

//         }
//         const data = await response.json()
//         console.log(data)
        
//     }
//     catch(error)
//     {
//         console.log(error);

//     }
    
// }
// fechdataHttp()

// cereate post

// async function cereatePost(){
//     try{
//         // console.log("we will create thw post");
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//             method : 'POST',
//             headers:{
//                 'content-Type': 'application/json',
//             },
//             body : JSON.stringify({
//                 title:"Tarish",
//                 body:"Waxa uu dhashay 1990",
//                 userId : 1
                
//             })
//         })

//         if(!response.ok){
//             throw new Erro (`http error: ${response.status}`)
//         }
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }catch{

//     }

// }

// cereatePost()
// console.log(",,,,,,,,,,,,,,,,,,,,,")


// practice for promise

function displayUserData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve
                {id:1,name:'Ali'};
            }else{
                console.log("failed to Display User Data..........")
            }

        },2000)
    })
}
displayUserData()
.then(user => console.log(`the data is ${user}`))
.catch(eror=> console.log(eror));

console.log("hey we will fech all data about our user...")