// 创建用户集合
// 引入mongoose第三模块
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        // 保证邮箱地址不重复
        unique:true,
        // unique:true 该数值在数据库内是不是唯一值
        required:true

    },
    password:{
        type:String,
        required:true
    },
    role:{
        // admin 超级管理员
        // normal 普通用户
        type:String
    },
    status:{
        type:Number
        // 0启用 1禁用
    }


})

const User = mongoose.model('User',userSchema)
// 将用户集合作为模块成员进行导出
async function createUser(){
   const salt = await bcrypt.genSalt(10)
   const pass = await bcrypt.hash('123456',salt)
   const user = await User.create({
    username:'admin123',
    email:'admin@123.com',
    password:pass,
    role:'admin',
    status:0
   })
}
/* User.create({
    username:'admin123',
    email:'admin@123.com',
    password:'123456',
    role:'admin',
    status:0
}).then(()=>{
    console.log('用户创建成功')
}).catch(()=>{
    console.log('用户创建失败')
}) */

module.exports = {User}