//promise

function message(){
    return Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({Name:"Ali",age:23})

            }else{
                reject({})
            }
            
        }, 2000);
    })
}