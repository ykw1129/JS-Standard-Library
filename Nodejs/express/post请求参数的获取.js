const express = require('express')
const bodyParser = require('body-parser')
// 引入body-parser
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
// extended:false 方法内部采用querystring模块处理请求参数的格式
// extended:true 方法内部使用第三方模块qs处理请求参数的格式
// 配置body-parser模块
const port = 3000
app.post('/add',(req,res)=>{
    // 接收请求参数
    console.log(req.body)
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))