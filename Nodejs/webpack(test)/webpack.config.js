/* webpack 的 4.x 版本中默认约定
    打包的入口文件为 src -> index.js
    打包的输出文件为dist ->main.js
*/
// 如果要修改打包的入口的出口 添加如下信息
// entry   output
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入预览页面插件
const path = require('path')
const HtmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html', //指定要用到的模板文件
    filename:'index.html'          //指定生成的文件名称，该文件存在于内存中，在目录中不显示
})
module.exports = {
    mode:"development" ,//mode 用来指定构建模式
    entry:path.join(__dirname,'./src/index.js'),//打包入口路径
    output:{
        path:path.join(__dirname,'./dist'),//输出文件存放路径
        filename:'main.js'//输出文件的名称
    },
    plugins:[HtmlPlugin] //plugins 数组是webpack 打包期间会用到的一些插件列表

}