// get method

async function getData(){
    try{
        console.log("please await we will read all users!!!");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response){
            throw new Error("http error " , response.status);
            
        }

    }catch(erorr){
        console.log(erorr)
    }
}