async function HelloWorld()
{
    return  "Hello World"
}



async function callasync()
{
    const res=await HelloWorld()
    console.log(res)
}
callasync()