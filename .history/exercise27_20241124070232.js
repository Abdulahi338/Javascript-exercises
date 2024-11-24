//promise

function message(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = false;
            if(success){
                resolve({Name:"Ali",age:23});

            }else{
                reject("failed!!!");
            }
            
        }, 2000);
    })
}

message().then(data => console.log(data)).catch(error => console.error("Error  " ,ero))