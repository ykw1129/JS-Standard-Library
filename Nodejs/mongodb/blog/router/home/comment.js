const {Comment} = require('../../model/comment')

module.exports =async (req,res) =>{
    // 接受post请求参数
    const {content,uid,aid} = req.body;

    // 将评论信息存储在评论集合中
    Comment.create({
        content,
        uid,
        aid,
        time:new Date()
    })
    // 将页面重定向文章详情页面
    res.redirect('/home/article?id='+aid)
}