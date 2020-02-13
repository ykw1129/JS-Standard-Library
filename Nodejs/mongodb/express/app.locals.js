const template = require('art-template')
const express = require('express')
const app = express()
const port = 3000

app.locals.users = [{
    name:'张三',
    age:23
}]
// 将变量设置到app.locals对象下面,这个数据在所有模板中都可以获取到

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))