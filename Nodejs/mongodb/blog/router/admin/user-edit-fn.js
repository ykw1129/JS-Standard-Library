const Joi = require('joi')

module.exports = (req,res)=>{

    // 定义对象的验证规则
    const schema = {
        username:Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
        email:Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求'))

    };
    res.send(req.body)
}