fs=require("fs")


//top most statement to execute

console.log("program started")

//first phase

setTimeout(()=>{
    console.log("timer based function ")
},0)

//second phade
fs.readFile("hello.txt",()=>{
    console.log("file is read")

})


//third phase
setImmediate(()=>{
    console.log("set immediate executed")
 })

const readable=fs.createReadStream("hello.txt")
//fourth phase executed
readable.on("close",()=>{
    console.log("readable stream closed")
})
readable.close()
//top most statement to execute
console.log("program ended")

