const express = require('express')
const home = express.Router()

home.get('/',require('./home/index'))

// 博客前台文章详情展示页面
home.get('/article',require('./home/article'))

module.exports = home