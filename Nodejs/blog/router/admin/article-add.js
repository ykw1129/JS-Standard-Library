// 引入formidable第三方模块
const formidable =  require('formidable')
const path = require('path')
const { Article } = require('../../model/article')

module.exports = (req,res) =>{
    // 1、创建表单解析对象
    const form = new formidable.IncomingForm();
    // 2.配置上传文件的存放位置
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    // 3、保留上传文件的后缀
    form.keepExtensions = true
    // 4、解析表单
    form.parse(req,async (err,field,files)=>{
        // 1、err是错误对象 如果表单解析失败 err里存储错误信息 如果err解析成功 err将会是空
        // 2、fields 对象类型 保存普通表单数据
        // 3、files 对象类型 保存了和上传文件相关的数据
        // res.send(files.cover.path.split('public')[0])
        await Article.create({
            title:field.title,
            author:field.author,
            publishDate:field.publishDate,
            cover:files.cover.path.split('public')[1],
            content:field.content
        })
        res.redirect('/admin/article')
    })
}