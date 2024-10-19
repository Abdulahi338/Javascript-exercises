// asycn and await

function data(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({
                    Name:""
                })

            }else{

            }
            
        }, 4000);

    })
}