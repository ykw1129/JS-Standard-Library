const a = require('./a')
// 1、如果隐藏文件名后缀，那么将会找同名js文件 
// 如果没找到 就会在同名文件夹里找index.js文件
console.log(a)


// require('a')
// 1、nodejs会假设它是系统模块
// 2、nodesjs回去node_modules文件夹中
// 3、首先看看是否有改名字的js文件
// 4、再看是有盖名字的文件夹
// 5、如果是文件夹再看里面是否有index.js
// 6、如果没有找到index.js查看该文件夹中的package.json中的main选项确定模块入口文件
// 7、否则找不到报错
