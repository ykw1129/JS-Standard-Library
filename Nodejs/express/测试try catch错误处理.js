const express = require('express')
const app = express()
const fs = require('fs')
const promisify = require('util').promisify
// 把原来的异步回调方法改成返回 Promise 实例的方法
// TODO:promisify的作用  稍后需了解
const readFile = promisify(fs.readFile)
const port = 3000

app.get('/index',async (req,res,next)=>{
    try{
        await readFile('./aaaa.js')
        // 显示错误但是让程序继续运行
    }catch(ex){
        next(ex)
    }
})
app.use((err,req,res,next)=>{
    res.status(500).send(err.message)
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))