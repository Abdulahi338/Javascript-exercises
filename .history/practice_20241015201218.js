//
async function fetchData() {
    console.log("we are fetch your data!!")
    try{
        const data = await fetch("./example.json")
        console.log(data)

    }catch{
        console.log

    }
   
    
}

fetchData()