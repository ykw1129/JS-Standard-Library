const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodbtest', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // useNewUrlParser:true 使用新的url解析器
    // 当前服务器发现和监视引擎已弃用，将在将来的版本中删除。要使用新的服务器发现和监视引擎，请将选项{useUnifiedTopology:true}传递给mongoclient构造函数。
    .then((result) => {
        console.log("数据库连接成功")
    }).catch((err) => {
        console.log("数据库连接失败")
    });

const courseSchema = new mongoose.Schema({
    name: String,
    alive: Boolean
}, {
    versionKey: false
})
//{versionKey: false} 是不需要mongodb的_v(版本字段)
const Course = mongoose.model('Course', courseSchema)
/* 
    Course.find().then(result=>{
        // 查询用户集合中的所有文档
        console.log(result)
    }) */
// 根据条件查询满足条件项
Course.find({
    name: 'yy'
}).then(result => {
    console.log(result)
})
// 根据条件查询第一项满足条件的
Course.findOne({
    name: 'yo'
}).then(result => {
    console.log(result)
})

// 查找匹配想项
Course.find({
    age: {
        $gt: 20,
        $lt: 50
    }
}).then(result => console.log(result))
// 寻找age字段 值大于20小于50的匹配项  $gt是大于 $lt是小于
Course.find(name: {
    $in: ['敲代码']
}).then(result => console.log(result))
// 寻找name字段 值数组中含有敲代码  $in是大于
Course.find().select('name email _id').then(result => {
    console.log(result)
})
// select 选择要查询的字段
Course.find().sort('age').then(result => console.log(result))
// 按照年龄进行升序排序
Course.find().sort('-age').then(result => console.log(result))
// 按照年龄进行升序降序
Course.find().skip(2).limit(2).then(result => console.log(result))
// skip跳过多少文档  limit限制显示多少文档