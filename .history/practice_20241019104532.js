// //
// async function fetchData() {
//     console.log("we are fetch your data!!")
//     const data = await fetch('./example.json')
//     const jsonData = await data.json();
//         console.log(jsonData)
  
   
    
// }

// fetchData()

async function fechdataHttp() {
    //get method
    try{
        console.log("Fetching data starts.......👁️👁️");
        const response = await fetch('https://jsonplaceholder.typicode.com/postsg');
        if(response.ok){
            console.log("erorr is detected")
           

        }
        const data = await response.json()
        console.log(data)
        
    }
    catch(error)
    {
        console.log(error);

    }
    
}
fechdataHttp()