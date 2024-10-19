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
        if(response.status == ok){
            const data = await response.json()
            console.log(data)

        }
        console.log("")
    }
    catch(error)
    {
        console.log(error);

    }
    
}
fechdataHttp()