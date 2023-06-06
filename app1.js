fs=require('fs')
async function customfun()
{
    return "Promise function"
}
fs.readFile("hello.txt",()=>{
      
    setTimeout(()=>{
        console.log("timer inside read file")
    },0)

    setImmediate(()=>{
        console.log("Set immediate inside read file")
    })
    console.log("read file completed")
 
      const res=customfun()
      
      res.then((e)=>{
        console.log(e)
      })
      process.nextTick(()=>{
        console.log("next process")
      })

})