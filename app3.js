const promise=new Promise((resolve,reject)=>{
    reject("error")
})

promise.then((e)=>console.log(e)).catch((e)=>console.log(e))