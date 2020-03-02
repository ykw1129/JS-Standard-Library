const express = require('express')
const path = require('path')
const session =require('express-session')
const formidable = require('formidable')
// const bodyParser = require('body-parser')
const template = require('art-template')
const fs = require('fs')
const request = require('request')
// 创建web服务器
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname,'public')))
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    // 2、允许客户端使用哪些请求方式访问我
    res.header('Access-Control-Allow-Methods','get,post')
    res.header('Access-Control-Allow-Credentials',true)
    // 允许客户端发送跨域请求时携带cookie信息
    next()
})
app.post('/login',(req,res)=>{
    var form = formidable.IncomingForm()
    form.parse(req,(err,field,file)=>{
    const {username,password} = field
    if(username=='admin'&&password =='123456'){
        req.session.isLogin = true
        res.send({message:'登陆成功'})
    }
        res.send({message:'登录失败，用户名或密码错误'})
    })
})
app.get('/checkLogin',(req,res)=>{
    
})
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
// 调用urlencoded该方法 就表示要采用 application/x-www-form-urlencoded
app.listen(port, () => console.log(`服务器启动了`))