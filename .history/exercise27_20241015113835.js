//promise

function message(){
    setTimeout( ){return Promise((resolve,reject)=>{
        const sucess = true;
        if(sucess){
            resolve ={Name:"Ahmed",age:23}

        }else(){
            reject = "error  .....!"
        }
    }
    },2000)
}