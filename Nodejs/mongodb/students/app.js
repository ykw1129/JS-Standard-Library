const http = require('http')
const path = require('path')
const getRouter = require('router')
const template = require('art-template')
const router = getRouter();
const serveStatic = require('serve-static')
// 引入处理静态资源的第三方模块

// 配置模板根目录
template.defaults.root = path.join(__dirname, 'views')
// 配置后缀名
template.defaults.extname = '.html'
// 呈递学生档案信息页面
const serve = serveStatic(path.join(__dirname, 'public'))
router.get('/add',(req,res)=>{
    let html = template('add',{})
    res.end(html)
})
// 呈递学生档案信息档案列表页面
router.get('/list',(req,res)=>{
    let html = template('list',{})
    res.end(html)
})
require('./model/connect');
const Student = require('./model/user');

const app = http.createServer();

app.on('request',(req,res)=>{
    // 启动路由功能
    router(req,res,()=>{})
    // 启动静态资源访问服务功能
    serve(req,res,()=>{console.log("静态资源处理完毕")})
    // 处理静态资源
})

app.listen(80);
console.log('服务器启动了')