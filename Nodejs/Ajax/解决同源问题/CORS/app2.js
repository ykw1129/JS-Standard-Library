const express = require('express')
const path = require('path')
const formidable = require('formidable')
// const bodyParser = require('body-parser')
const template = require('art-template')
const fs = require('fs')
const app = express()
const port = 3002

app.use(express.static(path.join(__dirname,'public')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded
app.get('/cross',(req,res)=>{
        //1、允许客户端访问我
        res.header('Access-Control-Allow-Origin','*')
        // 2、允许客户端使用哪些请求方式访问我
        res.header('Access-Control-Allow-Methods','get,post')
        
        res.send('ok')
})

app.listen(port, () => console.log(`服务器启动了`))