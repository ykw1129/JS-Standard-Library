const express = require('express')
const app = express()
const home = express.Router()
// 创建路由对象
const port = 3000

app.use('/home',home)
// 将路由和请求路径进行匹配

home.get('/index',()=>{
    // /home/index
    res.send('欢迎来到展示页面')
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))