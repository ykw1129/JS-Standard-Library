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
        ，
        string：{
            type:String,
            enum:{
                values:['a','b','c','d'],
                message:'分类名称要在一定的范围内才可以'
            }
            // enum:['a','b','c','d']
            // 值只能从这几个值中选
        }
        auther:{
            type:String,
            validate:{
                validate:v=>{
                    // 返回布尔值
                    // true 验证成功
                    // false 验证失败
                    // v 要验证的值
                    return v&&v.length > 4
                },
                // 自定义验证规则
                message:'传入的值不符合规范'
                
            }
        }
        alive:Boolean
    },{versionKey: false})

    const Course = mongoose.model('Course',courseSchema)
    
Course.create({name:'ykw',alive:true,age:100})
    .then(result=>{console.log(result)})
    .catch(err=>{
        const err = err.errors;
        // 获取错误信息对象
        for (const attr in err) {
            // 循环错误信息
            console.log(err[attr]['message'])
            // 打印错误信息
        }
    })