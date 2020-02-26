const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("数据库连接成功"))
.catch((err)=>console.log("数据库连接错误"))