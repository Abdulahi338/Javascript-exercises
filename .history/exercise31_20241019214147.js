// get method

async function getData(){
    try{
        console.log("please await we will read all users!!!");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error("http error " , response.status);
            
        }
        const data = await response.json();
        console.l

    }catch(erorr){
        console.log(erorr)
    }
}