const express = require('express')
const app = express()
const promisify = require('util').promisify
const fs = require('fs')
const port = 3000
app.use('/index',(req,res,next)=>{
    // 当客户端访问/index的时候走当前中间件
})



// 中间件的应用
// 可以用作拦截请求
app.use('/admin',(req,res,next)=>{
    let isLogin = false
    // 让用户登陆
    if(isLogin){
        // 让请求继续往下执行
    }else{
        // 如果用户没有登陆 直接对客户端做出响应
        res.send('您还没有登陆  不能访问admin这个页面')

    }
})
app.get('/admin',(req,res)=>{
    res.send('您已经登陆可以访问此页面')
})
app.use('/home',(req,res,next)=>{
    res.status(404)
    res.send('当前访问的页面不存在')
})
app.get('/err',(req,res)=>{
    throw new Error('此页面不存在');
})
app.get('/fs',(req,res,next)=>{
    fs.readFile("/app.js",(err,data)=>{
        if(err){
            next(err)
            // 异步代码无法捕获错误 所以需要通过next(err)才能触发错误处理中间件
            // 将错误信息通过参数形式传递给next() 即可触发错误处理中间件
        }else{
            res.end(data)
        }
    })
})
app.get('/',async (req,res)=>{
    try{
        await User.find({name:'张三'})
        // 如果在try代码块中捕获到错误  将运行catch代码块中的代码
        // 如果没有捕获到错误  将直接跳过catch
    }catch(ex){
        next(ex)
    }
})
app.use((err,req,res,next)=>{
    // 将错误传递给错误处理中间件
    // 错误处理中间件  只能在同步代码执行下才能捕获错误  异步代码出错时无法捕获到的
    res.status(500).send(err.message);
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))