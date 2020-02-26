const {User} = require('../../model/user')
const bcrypt = require('bcryptjs')
module.exports = async (req,res,next) =>{
    const {username,email,role,status,password} = req.body
    // 接收客户端传递过来的请求参数
    const {id} = req.query
    // 从get参数中获取到id值

    let user = await User.findOne({_id:id})
    const isVaild = await bcrypt.compare(password,user.password)
    if(isVaild){
        await User.updateOne({_id:id},{
            username,
            email,
            role,
            status
        })
        res.redirect('/admin/user');
    }else{
        let obj = {path:'/admin/user-edit',message:'密码比对失败,不能进行用户资料的修改',id:id}
        next(JSON.stringify(obj));
    }
}