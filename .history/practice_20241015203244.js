//
async function fetchData() {
    console.log("we are fetch your data!!")
    const data = await fetch('./example.json')
    // const jsonData = await data.json
        console.log(data)
    // try{
        

    // }catch(error){
    //     console.log(error);
        

    // }
   
    
}

fetchData()