// get method

async function getData(){
    try{
        console.log("please await we will read all users!!!");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(){
            throw new Error("http error ");
            
        }

    }catch(erorr){
        console.log(erorr)
    }
}