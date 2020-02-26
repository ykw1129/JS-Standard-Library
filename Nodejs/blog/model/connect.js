// 链接数据库
const mongoose = require('mongoose')
/* 将敏感配置信息存储在环境变量中
1、在config文件夹中建立 custom-environment-variables.json 文件
2、配置项属性的值填写系统环境变量的名字
3、项目运行时的config模块查找环境变量，并读取其值作为当前配置项属于的值
 */
const config = require('config')
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`,{ useUnifiedTopology: true,useNewUrlParser: true })
.then(()=>{console.log('数据库连接成功')}).catch((err)=>{console.log(err+'数据库连接失败')})

