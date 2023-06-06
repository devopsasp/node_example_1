import http from 'http'
const items=[{
    'itemName':'Coffee',
    "price":20,
},{
    "itemName":"Ice Tea",
    "price":25
},{
    "itemName":"Cold Coffee",
    "price":23
}]
const server=http.createServer((req,res)=>{
    if(req.method=='GET' && req.url=='/')``
    {
    res.write("Hello from server")
    }
    if(req.method=='GET' && req.url=='/item')
    {
     res.write(JSON.stringify(items))
    }
    res.end()
})
server.listen(5050)