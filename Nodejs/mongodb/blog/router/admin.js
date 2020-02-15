const express = require('express')
const admin = express.Router()
// 导入用户集合构造函数
const {User} = require('../model/user')

admin.get('/',(req,res)=>{
    res.send('欢迎来到后台首页')
})
admin.get('/login',(req,res)=>{
    res.render('admin/login')
})
admin.post('/login',async (req,res)=>{
    // 接收请求参数
    const {email,password} = req.body
    if(email.trim().length == 0||password.trim().length == 0){
        res.status(400).render('admin/error',{msg:'邮箱地址或者密码错误'})
    }
    let user = await User.findOne({email})
    // 如果查询到了用户 user是一个对象类型  如果没有查询到user变量为空
    if(user){
        // 将客户端传递过来的密码和用户信息中的密码进行比对
        if(password == user.password){
            // 登陆成功
            res.send('登陆成功')
        }
    }else{
        // 没有查询到用户
        res.status(400).render('admin/error',{msg:'邮箱地址或者密码错误'})
    }
})

module.exports = admin