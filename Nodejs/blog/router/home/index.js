const {Article} = require('../../model/article')
const pagination = require('mongoose-sex-page')
module.exports = async (req,res)=>{
    const size = 6
    const tetol = await Article.find()
    const {page} = req.query;
    const display = tetol.length/size
    let articles = await pagination(Article).find().page(page).size(size).display(display).populate('author').exec()
    res.render('home/index',{
        articles,
        display
    })
}