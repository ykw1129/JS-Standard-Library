const {Article} = require('../../model/article')
const pagination = require('mongoose-sex-page')
module.exports = async (req,res)=>{
    const size = 6
    const tetol = await Article.find()
    const {page} = req.query||1;
    const display = tetol/size
    let articles = await pagination(Article).find().page(page).size(size).display(display).populate('author').exec()
    res.render('home/index',{
        articles,
        display,
        page
    })
}