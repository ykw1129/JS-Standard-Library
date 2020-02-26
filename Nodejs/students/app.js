const http = require('http')
const path = require('path')
const querystring = require('querystring')
const getRouter = require('router')
const url = require('url')
const template = require('art-template')
const router = getRouter();
const dateformat = require('dateformat')
const serveStatic = require('serve-static')
const Student = require('./model/user');
// 引入处理静态资源的第三方模块

// 配置模板根目录
template.defaults.root = path.join(__dirname, 'views')
// 配置后缀名
template.defaults.imports.dateformat = dateformat
template.defaults.extname = '.html'
// 呈递学生档案信息页面
const serve = serveStatic(path.join(__dirname, 'public'))
router.get('/add',(req,res)=>{
    let html = template('add',{})
    res.end(html)
})
// 呈递学生档案信息档案列表页面
router.get('/list',async (req,res)=>{
    let students = await Student.find();
    let html = template('list',{
        students
    })
    res.end(html)
})
router.post('/add',(req,res)=>{
    // 接受post请求参数
    let formData = '';
    req.on('data',param=>{
        formData += param;
    })
    req.on('end',async ()=>{
       await Student.create(querystring.parse(formData))
       console.log(querystring.parse(formData))
       res.writeHead(301,{
           Location: '/list'
       })
        res.end()
    })
})
// 编辑页面
router.get('/edit',async (req,res)=>{
    const {query} = url.parse(req.url,true)
    let students =  await Student.findOne({_id:query.id})
    let sex = ['男','女','保密'];
    let hobbies = ['阅读','唱歌','跳舞'];
    let collage = ['前端开发','JAVA','PHP','PYTHON'];
    let html = template('edit',{
        students,
        sex,
        hobbies,
        collage
    })
    res.end(html)
})
router.get('/remove',async (req,res)=>{
    const {query} = url.parse(req.url,true)
    await Student.findByIdAndDelete({_id:query.id}).then(()=>{
        console.log("删除成功!")
    }).catch((err)=>{
        console.log("删除失败"+err)
    })
    console.log(query.id)
    res.writeHead(301,{
        Location:'/list'
    })
    res.end()
})
router.post('/edit',(req,res)=>{
    const {query} = url.parse(req.url,true)
    let formData = ''
    req.on('data',param=>{
        formData+=param
    })
    req.on('end',async ()=>{
       let student = querystring.parse(formData);
       await Student.updateOne({_id:query.id},student)
       res.writeHead(301,{
        Location:'/list'
       })
       res.end()
    })
})

require('./model/connect');


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