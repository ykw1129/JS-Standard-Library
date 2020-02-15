// 链接数据库
const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/blog',{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>{console.log('数据库连接成功')}).catch((err)=>{console.log(err+'数据库连接失败')})

