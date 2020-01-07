const path = require("path")
const fs = require('fs')

// 路径拼接语法
fs.readFile(path.join(__dirname,'json','a','db.json'),(err,data)=>{
    console.log(err,data)
})