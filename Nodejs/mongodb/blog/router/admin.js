const express = require('express')
const admin = express.Router()

admin.get('/login',require('../router/admin/loginPage'))
admin.post('/login',require('./admin/login'))
admin.get('/user',require('../router/admin/userPage'))
// 实现退出功能
admin.get('/loginout',(req,res)=>{
    
})
module.exports = admin