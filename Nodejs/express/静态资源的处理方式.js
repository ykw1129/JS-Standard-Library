const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// 实现静态资源访问功能
app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))