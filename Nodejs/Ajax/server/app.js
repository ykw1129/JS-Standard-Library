const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.get('/first',(req,res)=>{
    res.send('hello ajax')
})

app.get('/responseData',(req,res)=>{
    res.send({"name":"zs"})
})

app.listen(port, () => console.log(`服务器启动了`))