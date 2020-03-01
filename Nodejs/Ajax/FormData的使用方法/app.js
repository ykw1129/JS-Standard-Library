const express = require('express')
const path = require('path')
const formidable = require('formidable')
// const bodyParser = require('body-parser')
const template = require('art-template')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded

app.post('/formData',(req,res)=>{
    // 创建formidable表单解析对象
    const form = new formidable.IncomingForm();
    // 解析客户端传递过来的Formdata对象
    form.parse(req,(err,fields,files)=>{
        res.send(fields);
    })
})

app.post('/upload',(req,res)=>{
    const form = new formidable.IncomingForm()
    form.uploadDir = path.join(__dirname,'public','uploads')
    // 设置客户端上传文件的存储路径
    form.keepExtensions = true
    // 保留上传文件的后缀名
    form.parse(req,(err,fields,files)=>{
        // files.attrName.path 是图片存储绝对路径路径
        res.send({
            path:files.attrName.path.split('public')[1]
        })
    })
})

app.listen(port, () => console.log(`服务器启动了`))