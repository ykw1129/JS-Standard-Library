const express = require('express')
const admin = express.Router()

admin.get('/',(req,res)=>{
    res.send('欢迎来到后台首页')
})
admin.get('/login',(req,res)=>{
    res.render('admin/login')
})
admin.post('/login',(req,res)=>{
    // 接收请求参数
    const {email,password} = req.body
    if(email.trim().length == 0||password.trim().length == 0){
        res.status(400).render('admin/error',{msg:'邮箱地址或者密码错误'})
    }
})

module.exports = admin