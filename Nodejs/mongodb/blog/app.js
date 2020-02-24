const path = require('path')
const express = require('express')
// 引用express框架
const bodyParser = require('body-parser')
const session = require('express-session')
const dateFormate = require('dateformat')
const morgan = require('morgan')
const template = require('art-template')
const app = express()
// 创建网站服务器
require('./model/connect');
require('./model/user')
const home = require('./router/home')
const admin = require('./router/admin')
app.use(bodyParser.urlencoded({extended:false}))
// 配置session
app.use(session({
    resave: false,
    /* 并发请求会导致的session不一致，
    因为设置了resave选项为true后（默认为true），
    默认在你每次调用res.send方法发送响应的时候会
    执行一次req.session.save，
    所以不管这两个请求修没修改session，
    最后默认存储session的store里的值会是
    最后执行res.send方法也就是
    响应最慢的那个请求中session最后的值。 */
    saveUninitialized: true,
    secret:'secret key'
}))
app.use(express.static(path.join(__dirname,'public')))

// 获取系统环境变量 返回值是对象
// process.env
if(process.env.NODE_ENV == 'development'){
    // 当前是开发环境
    console.log("当前是开发环境")
    // 在开发环境中 将客户端 发送到服务器端的请求信息打印到控制台中
    app.use(morgan('dev'))
}else{
    // 当前是生产环境
    console.log("当前是生产环境")
}
// 拦截请求
// 告诉express框架模板所在的位置
app.set('views',path.join(__dirname,'views'))
// 告诉express框架的默认后缀是什么
app.set('view engine','html');
// TODO:当渲染后缀为art的模板时 所用的模板引擎是什么
app.engine('html',require('express-art-template'))
// 向模板内部导入dateFormate变量
template.defaults.imports.dateFormate = dateFormate
app.use('/admin',require('./middleware/loginGuard'))

app.use('/home',home)
app.use('/admin',admin)
app.get('/', (req, res) => res.send('Hello World!'))
app.use((err,req,res,next)=>{
    const e = JSON.parse(err)

    let params = []
    for(let attr in e){
        if(attr!='path'){
           params.push(attr+ '=' +e[attr])
        }
    }
    // params  ['密码比对失败,不能进行用户资料的修改','id的值'] 
    // join可以在这两中间加个&
    res.redirect(`${e.path}?${params.join('&')}`)
})
app.listen(3000, () => console.log(`博客服务器已在运行`))