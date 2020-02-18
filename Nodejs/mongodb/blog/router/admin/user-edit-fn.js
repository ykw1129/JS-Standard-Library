const bcrypt = require('bcrypt')
const {User,validateUser} = require('../../model/user')
module.exports = async (req,res,next)=>{


    try{
        await validateUser(req.body)
    }
    catch(e){
        // 验证没通过
        // 重定向用户添加页面
        // return res.redirect(`/admin/user-edit?message=${e.message}`)
        
        return next(JSON.stringify({path:'/admin/user-edit',message:e.message}))
    }
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:req.body.email})
    if(user){
        return next(JSON.stringify({path:'/admin/user-edit',message:'邮箱地址被占用'}))
    }
    const salt = await bcrypt.genSalt(10)
    // 加密
    const password = await bcrypt.hash(req.body.password,salt)
    // 替换密码
    req.body.password = password
    await User.create(req.body)
    res.redirect('/admin/user')
}