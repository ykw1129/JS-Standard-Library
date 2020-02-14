const express = require('express')
const admin = express.Router()

admin.get('/',(req,res)=>{
    res.send('欢迎来到后台首页')
})
admin.get('/login',(req,res)=>{
    res.render('admin/login')
})

module.exports = admin