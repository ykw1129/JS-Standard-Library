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
const VueLoaderPlugins = require('vue-loader/lib/plugin')
module.exports = {
    mode:"development" ,//mode 用来指定构建模式
    entry:path.join(__dirname,'./src/index.js'),//打包入口路径
    output:{
        path:path.join(__dirname,'./dist'),//输出文件存放路径
        filename:'main.js'//输出文件的名称
    },
    plugins:[HtmlPlugin,new VueLoaderPlugins()], //plugins 数组是webpack 打包期间会用到的一些插件列表
    module:{
        // 加载器
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            // test表示匹配的文件类型  use表示对应要调用的loader
            // 注意 use数组中指定的loader顺序是固定的
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use:'url-loader?limit=16940'
                // ?之后是loader的参数项
                // limit是指定图片大小，单位是字节 ，只有小于limit大小的图片，才会被转为base64格式
            },
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            // exclude为排除项,表示babel-loader不需要处理node_modules中的js文件
            {test:/\.vue$/,loader:'vue-loader'}
        ]
    }

}