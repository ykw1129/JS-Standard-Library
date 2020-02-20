const {User} = require('../../model/user')
module.exports =async (req,res)=>{
    // 获取要删除的用户id
    const {id} = req.query
    // 根据id删除用户
    await User.findOneAndDelete({_id:id})
    res.redirect('/admin/user')
}