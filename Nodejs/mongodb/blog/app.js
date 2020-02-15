const path = require('path')
const express = require('express')
// 引用express框架
const bodyParser = require('body-parser')
const app = express()
// 创建网站服务器
require('./model/connect');
require('./model/user')
const home = require('./router/home')
const admin = require('./router/admin')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))
// 拦截请求
// 告诉express框架模板所在的位置
app.set('views',path.join(__dirname,'views'))
// 告诉express框架的默认后缀是什么
app.set('view engine','html');
// TODO:当渲染后缀为art的模板时 所用的模板引擎是什么
app.engine('html',require('express-art-template'))




app.use('/home',home)
app.use('/admin',admin)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log(`博客服务器已在运行`))