// //
// async function fetchData() {
//     console.log("we are fetch your data!!")
//     const data = await fetch('./example.json')
//     const jsonData = await data.json();
//         console.log(jsonData)
  
   
    
// }

// fetchData()

async function fechdataHttp() {
    try{
        console.log("Fetching data starts.......👁️👁️");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(response){

        }
    }
    catch(error)
    {
        console.log(error);

    }
    
}
fechdataHttp()