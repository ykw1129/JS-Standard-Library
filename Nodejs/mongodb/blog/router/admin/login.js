const bcrypt = require('bcrypt')
// 导入用户集合构造函数
const {User} = require('../../model/user')
module.exports = async (req,res)=>{
    // 接收请求参数
    const {email,password} = req.body
    if(email.trim().length == 0||password.trim().length == 0){
        res.status(400).render('admin/error',{msg:'邮箱地址或者密码错误'})
    }
    let user = await User.findOne({email})
    // 如果查询到了用户 user是一个对象类型  如果没有查询到user变量为空
    if(user){
        // 将客户端传递过来的密码和用户信息中的密码进行比对
        let isValid = await bcrypt.compare(password,user.password)
        if(isValid){
            // 登陆成功
            req.session.username = user.username
            // 重定向到用户列表页
            req.app.locals.userInfo = user
            // 将用户信息应用到所有模板内
            res.redirect('/admin/user')
        }
    }else{
        // 没有查询到用户
        res.status(400).render('admin/error',{msg:'邮箱地址或者密码错误'})
    }
}