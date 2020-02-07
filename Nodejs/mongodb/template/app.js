// 导入模板引擎
const template = require('art-template')
const path = require('path')

// 1、template方法是用来拼接字符串的
// 1、模板路径 绝对路径
// 2、要在模板中显示的数据 对象类型
// 返回拼接好的字符串
const views = path.join(__dirname, 'views', 'index.html')
const html = template(views, {
    users: [{
        name: '张三',
        age: 29,
        content: '<h1>我就是h1</h1>'
    }, {
        name: '李四',
        age: 20,
        content: '<h1>我就是h1</h1>'
    }, {
        name: '王二',
        age: 22,
        content: '<h1>我就是h1</h1>'
    }],

    // 如果数据中携带html标签，默认模板引擎不会解析标签，会将其转义后输出
    // {{@content将会解析标签}}
    // 循环
    /* 
        {{each target}}
            {{$index}} {{$value}}
        {{/each}}
     */
})
console.log(html)