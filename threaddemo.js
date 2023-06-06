/*const data=fs.readFileSync("hello.txt")
console.log(Date.now()-start)
const data1=fs.readFileSync("hello.txt")
console.log(Date.now()-start)
const data2=fs.readFileSync("hello.txt")
console.log(Date.now()-start)
const data3=fs.readFileSync("hello.txt")
console.log(Date.now()-start)*/

fs=require('fs')

const MAX=4

const start=Date.now()
for(i=0;i<MAX;i++)
{
    
   fs.readFile("hello.txt",()=>{
    console.log(`read file ${Date.now()-start}`)
   })
   
}