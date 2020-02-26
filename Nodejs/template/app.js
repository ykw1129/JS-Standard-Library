// 导入模板引擎
const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat');

// 1、template方法是用来拼接字符串的
//  1、模板路径 绝对路径
//  2、要在模板中显示的数据 对象类型
//  返回拼接好的字符串



// 导入模板变量
template.defaults.imports.dateFormat = dateFormat
// 将方法导入了模板当中
// 设置模板的根目录
template.defaults.root = path.join(__dirname,views)
template.defaults.extname = '.html'
// 配置默认的模板后缀
const views = path.join(__dirname, 'views', 'index')
const html = template(views, {
    users: [{
        name: '张三',
        age: 29,
        content: '<h1>我就是h1</h1>',
        time:new Date()
    }, {
        name: '李四',
        age: 20,
        content: '<h1>我就是h1</h1>',
        time:new Date()
    }, {
        name: '王二',
        age: 22,
        content: '<h1>我就是h1</h1>',
        time:new Date()
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