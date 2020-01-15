const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodbtest',{useNewUrlParse:true})
    .then((result) => {
        console.log("数据库连接成功")
    }).catch((err) => {
        console.log("数据库连接失败")
    });