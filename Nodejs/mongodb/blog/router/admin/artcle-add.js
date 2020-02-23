// 引入formidable第三方模块
const formidable =  require('formidable')
const path = require('path')

module.exports = (req,res) =>{
    // 1、创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    // 3、保留上传文件的后缀
    form.keepExtensions = false
    // 4、解析表单
    res.send('ok')
}