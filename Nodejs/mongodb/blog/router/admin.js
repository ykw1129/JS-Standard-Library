const express = require('express')
const admin = express.Router()

admin.get('/login',require('../router/admin/loginPage'))
// 渲染登陆页面
admin.post('/login',require('./admin/login'))
// 实现登陆功能
admin.get('/user',require('../router/admin/userPage'))
// 渲染用户页面
admin.get('/loginout',require('../router/admin/loginout'))
// 实现退出功能
admin.get('/user-edit',require('../router/admin/user-edit'))

admin.post('/user-edit',require('../router/admin/user-edit-fn'))

admin.post('/user-modify',require('../router/admin/user-modify'))
module.exports = admin