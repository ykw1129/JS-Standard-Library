const express = require('express')
const app = express()
const port = 3000

app.get('/index',(req,res)=>{
    // 获取get请求参数
    res.send(req.query)
})
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))