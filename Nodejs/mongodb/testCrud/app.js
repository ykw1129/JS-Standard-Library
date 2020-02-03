// 搭建网站服务器 ，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时 ，将所有用户信息查询出来 
// 当用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 当用户访问/delete时，实现用户删除功能
const http = require('http');
const url = require('url')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch((err) => console.log(err + '数据库连接失败'))

// 创建用户集合规则
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80,
    },
    password: String,
    email: String,
    hobbies: [String]
})
const User = mongoose.model('User', userSchema)
// 创建服务器
const app = http.createServer();

app.on('request', async (req, res) => {
    // 请求方式
    const method = req.method;
    // 请求地址
    const {
        pathname
    } = url.parse(req.url)
    // 判断请求方式
    if (method == 'GET') {

        if (pathname == '/list') {
            //TODO: 呈现用户列表页面
            let users = await User.find();
            console.log(users)
            let list = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>

<body>

<div class="container">
    <h6>
        <a href="add.html" class="btn btn-primary">添加用户</a>
    </h6>
    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>用户名</th>
                <th>年龄</th>
                <th>爱好</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
        `;
            res.end(list)
        }

    } else if (method == 'POST') {

    }
    res.end('ok')
})
// 为服务器对象添加请求事件

app.listen(3000)