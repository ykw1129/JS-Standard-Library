const {Article} = require('../../model/article')
const pagination = require('mongoose-sex-page')
module.exports = async (req,res)=>{
    // 标识 标识当前访问的是用户管理页面
    req.app.locals.currentLink = 'article'
    let articles = await pagination(Article).find().page(1).size(2).display(3).populate('author').exec()
    // page 指定当前页
    // size 指定每页显示的数据
    // display 指定客户端要显示的页码数量
    res.render('admin/article',{
        articles
    })
}