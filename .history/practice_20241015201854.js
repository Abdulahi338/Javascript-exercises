//
async function fetchData() {
    console.log("we are fetch your data!!")
    const data = await fetch("./example.json")
        console.log(data.json)
    // try{
        

    // }catch(error){
    //     console.log(error);
        

    // }
   
    
}

fetchData()