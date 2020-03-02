function ajax(option){
    // 创建ajax对象
    var defaults = {
        type:'get',
        url:'',
        data:{},
        header:{
            'Content-Type':'application/x-www-form-urlencoded'
        },
        success:function(){},
        error:function(){}

    }
    Object.assign(defaults,option)
    // 将参数传入的覆盖掉 defaults
   var xhr =  new XMLHttpRequest()
    //配置ajax对象
    // 拼接请求参数的变量
    var params = ''
    for(var attr in defaults.data){
        params+=attr+'='+defaults.data[attr]+'&'
        // 循环对象应该用for in
    }
    params = params.substr(0,params.length - 1)
    if(defaults.type =='get'){
        
        defaults.url = defaults.url +'?'+params
    }
    xhr.open(defaults.type,defaults.url)
    // 发送请求
    if(defaults.type = 'post'){
        // 用户希望的向服务端传递的请求参数的类型
        var contentType = defaults.header['Content-Type']
        // 设置请求参数格式的类型
        xhr.setRequestHeader('Content-Type',contentType)
        if(contentType =='application/json'){
            xhr.send(JSON.stringify(defaults.data))
        }
        else{
            xhr.send(params)
        }
    }else{
        xhr.send()
    }
    
    // 监听xhr对象下面的onload事件
    // 当xhr对象接收完响应数据后触发
    xhr.onload = function(){
        if(xhr.status == 200){
            defaults.success(xhr.responseText,xhr)
        }else{
            defaults.error(xhr.responseText,xhr)
        }
    }
}