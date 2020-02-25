const {Article} = require('../../model/article')
module.exports =async (req,res)=>{
    const id = req.query.id;
    // 根据id查询文章详细信息
    let article = await Article.findOne({_id:id}).populate('author')
    res.render('home/article',{
        article
    })


}