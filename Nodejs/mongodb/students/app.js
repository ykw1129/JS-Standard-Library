const http = require('http')
const url = require('url')
const path = require('path')
const getRouter = require('router')
const template = require('art-template')
const router = getRouter();

// 配置模板根目录
template.defaults.root = path.join(__dirname,'views')
// 呈递学生档案信息页面
router.get('/add',(req,res)=>{
    res.end('test')
})
// 呈递学生档案信息档案列表页面
router.get('/list',(req,res)=>{
    res.end('index')
})
require('./model/connect');
const Student = require('./model/user');

const app = http.createServer();

app.on('request',(req,res)=>{
    router(req,res,()=>{})
})

app.listen(80);
console.log('服务器启动了')