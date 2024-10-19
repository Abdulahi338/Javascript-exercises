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
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
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

// cereate post

async function cereatePost(){
    try{
        console.log("we will create thw post")
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
            methos : "post",
            headers:{
                'content-type': application/json
            },
            body : json.stringfy({
                title:"Tarish",
                body:"Waxa uu dhashay 1990",
                id : 1
                
            })
        })

        if()
    }
    catch(erorr){
        console.log(error)
    }
}