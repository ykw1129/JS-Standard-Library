const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded
app.get('/first',(req,res)=>{
    res.send('hello ajax')
})

app.get('/responseData',(req,res)=>{
    res.send({"name":"zs"})
})
app.get('/get',(req,res)=>{
    res.send(req.query)
})
app.post('/post',(req,res)=>{
    res.send(req.body)
})
app.post('/json',(req,res)=>{
    // get请求是不能提交json对象格式的，传统网站的表单提交也是不支持json对象格式的
    res.send(req.body)
})
app.get('/readystate',(req,res)=>{
    res.send('hello')
})

app.get('/error',(req,res)=>{
    res.status(400).send('not ok')
})
app.get('/cache',(req,res)=>{
    fs.readFile('./text.txt',(err,result)=>{
        res.send(result)
    })
})

app.listen(port, () => console.log(`服务器启动了`))