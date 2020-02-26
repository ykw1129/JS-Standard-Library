const {Article} = require('../../model/article')
const {Comment} = require('../../model/comment')
module.exports =async (req,res)=>{
    const id = req.query.id;
    // 根据id查询文章详细信息
    let article = await Article.findOne({_id:id}).populate('author')
    let comments = await  Comment.find({aid:id}).populate('uid')
    res.render('home/article',{
        article,
        comments
    })


}