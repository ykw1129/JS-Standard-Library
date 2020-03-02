const express = require('express')
const path = require('path')
const formidable = require('formidable')
// const bodyParser = require('body-parser')
const template = require('art-template')
const fs = require('fs')

// 创建web服务器
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded

app.listen(port, () => console.log(`服务器启动了`))