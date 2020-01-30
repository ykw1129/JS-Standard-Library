// 搭建网站服务器 ，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时 ，将所有用户信息查询出来 
// 当用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 当用户访问/delete时，实现用户删除功能
const http =require('http');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground',{ useUnifiedTopology: true })
    .then(()=>console.log('数据库连接成功'))
    .catch((err)=>console.log(err+'数据库连接失败'))

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    
})
// 创建服务器
const app = http.createServer();

// 为服务器对象添加请求事件
app.on('request',(req,res)=>{
    res.end('ok')
})

app.listen(3000)