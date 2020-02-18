const {User}= require('../../model/user')

module.exports =async (req,res)=>{
    // 接收客户端传递过来的当前页参数
    let page = req.query.page||1
    // 每一页显示数据条数
    let pagesize = 5;
    // 查询用户数据的总数
    let count = await User.countDocuments({})
    // 总页数
    let total = Math.ceil(count/pagesize)
    // 页码 
    let start = (page-1)*pagesize
    let users = await User.find().limit(pagesize).skip(start)
    let totalArray = []
    for(let i = 0;i<total;i++){
        totalArray[i]= i+1
    }
    res.render('admin/user',{
        users,
        page:parseInt(page),
        totalArray,
        max:Math.max.apply(null,totalArray)
        // 最大页码
    })
}