module.exports = (req,res,next)=>{
   // 判断用户登陆的是否是登陆页面
    // 判断用户登陆状态
    // 如果用户是登陆的 将请求放行
    // 如果用户不是登陆的,将请求重定向到登陆页面
    if(req.url!='/login'&&!req.session.username){
        res.redirect('/admin/login')
    }else{
        // 用户是登陆状态 将请求放行
        next()
    }
}
