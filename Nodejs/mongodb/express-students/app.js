const  express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`服务器运行中`))