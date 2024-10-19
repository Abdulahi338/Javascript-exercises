//promise

function message(){
    return Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({Name:"Ali",age:23})

            }else{
                reject("failed!!!")
            }
            
        }, 2000);
    })
}

message().then(data => console.log(da))