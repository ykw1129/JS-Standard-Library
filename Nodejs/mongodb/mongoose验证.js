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
        name:{
            type:String,
            required:[true,'请传入姓名']
            // [值,错误信息]
            minlength:[2,'文章长度不能小于2'],
            // 最小长度是2
            maxlength:[5,'文章长度不能大于5'],
            // 最大长度是5
            trim:true,
            // 去除字符串两边的空格
            max:100
            //最大值是100  
            // max是对number类型  maxlength是对字符串类型
        },
        date:{
            type:Date,
            default:Date.now
            //默认当前时间
        }
        alive:Boolean
    },{versionKey: false})