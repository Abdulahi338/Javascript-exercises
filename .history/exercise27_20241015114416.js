//promise

function message(){
    return Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({Nam})

            }
            
        }, 2000);
    })
}