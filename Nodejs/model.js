const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodbtest',{useNewUrlParser:true,useUnifiedTopology: true})
// useNewUrlParser:true 使用新的url解析器
// 当前服务器发现和监视引擎已弃用，将在将来的版本中删除。要使用新的服务器发现和监视引擎，请将选项{useUnifiedTopology:true}传递给mongoclient构造函数。
    .then((result) => {
        console.log("数据库连接成功")
    }).catch((err) => {
        console.log("数据库连接失败")
    });

    const courseSchema = new mongoose.Schema({
        name:String,
        alive:Boolean
    },{versionKey: false})
    //{versionKey: false} 是不需要mongodb的_v(版本字段)
    
    const Course = mongoose.model('Course',courseSchema)

    const course = new Course({
        name:'ykw',
        alive:true,
        age:100
    })

course.save()