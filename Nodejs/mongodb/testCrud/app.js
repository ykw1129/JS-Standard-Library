// 搭建网站服务器 ，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时 ，将所有用户信息查询出来 
// 当用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 修改用户信息分为两大步骤
// 1、增加页面路由 呈现页面
    // 1、在点击修改按钮的时候 将用户id传递到当前页面
    // 2、从数据库中查询当前用户信息 将用户信息展示到页面中
// 2、实现用户修改功能
    // 1、指定表单的提交地址以及请求方式
    // 2、接受客户端传递过来的修改信息，找到用户 将用户信息更改为最新

// 当用户访问/delete时，实现用户删除功能
const http = require('http');
const url = require('url')
const querystring = require("querystring")
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
        pathname,
        query
    } = url.parse(req.url, true)
    // 判断请求方式
    if (method == 'GET') {

        if (pathname == '/list'||pathname =='/') {
            //TODO: 呈现用户列表页面
            let users = await User.find();
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
        <a href="/add" class="btn btn-primary">添加用户</a>
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
        </thead>
        <tbody>
        `;
            // 对数组进行循环操作
            users.forEach(item => {
                list += `
            <tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>`;
                item.hobbies.forEach(item => {
                    list += `<span>${item}</span>`
                })
                list += `</td>
                <td>${item.email}</td>
                <td>
                    <a href="/modify?id=${item._id}" class="btn btn-success">修改</a>
                    <a href="/remove?id=${item._id}" class="btn btn-danger">删除</a>
                </td>
            </tr>
            `
            });
            list += `</tbody>
        </table>
        
    </div>
    
    </body>
    <script src="https://cdn.bootcss.com/jquery/2.2.2/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
        integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
    </script>
    
    </html>`
            res.end(list)
        } else if (pathname == '/add') {
            //TODO:加载添加用户界面
            let add = `<!DOCTYPE html>
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
                    <h3>添加用户</h3>
                    <form method="post" action="/add">
                        <div class="form-group">
                            <label for="">用户名</label>
                            <input type="text" class="form-control" placeholder="请填写用户名" name="name">
                        </div>
                        <div class="form-group">
                            <label for="">密码</label>
                            <input type="password" class="form-control" placeholder="请填写密码" name="password">
                        </div>
                        <div class="form-group">
                            <label for="">年龄</label>
                            <input type="number" class="form-control" placeholder="请填写年龄" name="age">
                        </div>
                        <div class="form-group">
                            <label for="">邮箱</label>
                            <input type="email" class="form-control" placeholder="请填写邮箱" name="email">
                        </div>
                        <h4>选择您的爱好</h4>
                        <div class="checkbox">
                            <label class="checkbox-inline">
                                <input type="checkbox" value="sing" name="hobbies">
                                唱歌
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="dance" name="hobbies">
                                跳舞
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="read" name="hobbies">
                                阅读
                            </label>
                        </div>
                        <button type="submit"  class="btn btn-large btn-inline btn-success">添加用户</button>
                    </form>
                </div>
            
            
            </body>
            <script src="https://cdn.bootcss.com/jquery/2.2.2/jquery.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
                integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
            </script>
            
            </html>`;
            res.end(add)
        } else if (pathname == '/modify') {
            //TODO:加载修改用户界面
            let user = await User.findOne({
                _id: query.id
            })
            let hobbies = ['sing', 'dance', 'read']
            let modify = `<!DOCTYPE html> 
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
                      <h3>添加用户</h3>
                      <form method="post" action="/modify?id=${user._id}">
                          <div class="form-group">
                              <label for="">用户名</label>
                              <input value="${user.name}" type="text"  class="form-control" placeholder="请填写用户名" name="name">
                          </div>
                          <div class="form-group">
                              <label for="">密码</label>
                              <input value="${user.password}" type="password" class="form-control" placeholder="请填写密码" name="password">
                          </div>
                          <div class="form-group">
                              <label for="">年龄</label>
                              <input value="${user.age}" type="number" class="form-control" placeholder="请填写年龄" name="age">
                          </div>
                          <div class="form-group">
                              <label for="">邮箱</label>
                              <input value="${user.email}"type="email" class="form-control" placeholder="请填写邮箱" name="email">
                          </div>
                          <h4>选择您的爱好</h4>
                          <div class="checkbox">

                          `;
                          
                          hobbies.forEach(item=>{
                              //判断当前循环项在不在用户的爱好数组里
                              let isHobby = user.hobbies.includes(item)
                              if(isHobby){
                                  modify+=`
                                  <label class="checkbox-inline">
                                  <input type="checkbox" value="${item}" name="hobbies" checked>
                                  ${item}
                              </label>`
                              }else{
                                  modify+=`
                                  <label class="checkbox-inline">
                                  <input type="checkbox" value="${item}" name="hobbies">
                                  ${item}
                              </label>`
                              }
                          })
            modify += `</div>
              <button type="submit"  class="btn btn-large btn-inline btn-success">修改用户</button>
          </form>
      </div>
  
  
  </body>
  <script src="https://cdn.bootcss.com/jquery/2.2.2/jquery.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
  </script>
  
  </html>`
            res.end(modify)
        }else if(pathname == '/remove'){
            // res.end(query._id)
            await User.findByIdAndDelete({_id:query.id})
            res.writeHead(301,{
                Location:'/'
            });
            res.end();
        }

    } else if (method == 'POST') {
        // 用户添加功能
        if (pathname == '/add') {
            // 接受用户提交的信息
            // 将用户提交的信息添加到数据库中
            let FormData = '';
            // 接收post参数
            req.on('data', (param) => {
                FormData += param
            })
            // post参数接收完毕
            req.on('end', async () => {
                let user = querystring.parse(FormData)
                // 将用户提交的信息添加在数据库中
                await User.create(user);
                // 301代表重定向
                // location跳转地址
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end()
            })
            // 将用户提交的信息添加到数据库中
        }
        else if(pathname == '/modify'){
            // 接受用户提交的信息
            // 将用户提交的信息添加到数据库中
            let FormData = '';
            // 接收post参数
            req.on('data', (param) => {
                FormData += param
            })
            // post参数接收完毕
            req.on('end', async () => {
                let user = querystring.parse(FormData)
                // 将用户提交的信息添加在数据库中
                await User.updateOne({_id:query.id},user);
                // 301代表重定向
                // location跳转地址
                res.writeHead(301, {
                    'Location': '/'
                });
                res.end()
            })
            // 将用户提交的信息添加到数据库中
        }
    }
    // res.end('ok')
})
// 为服务器对象添加请求事件

app.listen(3000)