const express = require('express')
const path = require('path')
const formidable = require('formidable')
// const bodyParser = require('body-parser')
const template = require('art-template')
const fs = require('fs')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname,'public')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded
app.get('/test',(req,res)=>{
    const result = 'fn({name:"张三"})'
    res.send(result)
})
app.get('/better',(req,res)=>{
    const fnName = req.query.callback
    // 接收客户端传递过来的名称
    const result = fnName+'({name:"张三"})'
    // 将函数名称对应的函数调用代码返回给客户端
    res.send(result)
})

app.listen(port, () => console.log(`服务器启动了`))