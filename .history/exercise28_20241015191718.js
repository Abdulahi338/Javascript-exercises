// asycn and await

function data(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve({
                    Name:"Ali",age:23
                })

            }else{

            }
            
        }, 4000);

    })
}