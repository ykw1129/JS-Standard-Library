const express = require('express')
const admin = express.Router()
admin.get('/',require('../router/admin/loginPage'))
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

admin.get('/delete',require('../router/admin/delete'))

// 文章列表页面路由
admin.get('/article',require('../router/admin/article'))
// 文章编辑页面路由
admin.get('/article-edit',require('../router/admin/article-edit'))

// 实现文章添加功能的路由
admin.post('/article-add',require('../router/admin/article-add'))
module.exports = admin