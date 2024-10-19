// asycn and await

function data(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({
                    Name:"Ali"
                })

            }else{

            }
            
        }, 4000);

    })
}