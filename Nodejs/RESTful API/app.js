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
app.get('/users',(req,res)=>{
    res.send('欢迎来到users')
})
app.get('/users/:id',(req,res)=>{
    const {id} = req.params.id
    res.send(`您在请求${id}`)
})
app.put('/users/:id',(req,res)=>{
    const {id} = req.params.id
    res.send(`您在更新${id}`)
})
app.delete('/users/:id',(req,res)=>{
    const {id} = req.params.id
    res.send(`您在删除${id}`)
})


app.listen(port, () => console.log(`服务器启动了`))