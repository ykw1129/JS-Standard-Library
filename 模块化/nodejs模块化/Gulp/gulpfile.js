// glup.src()  获取任务要处理的文件
// glup.dest() 输出文件
// glup.task() 建立gulp任务
// gulp.watch() 监控文件的变化
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')

/* gulp.task('one',()=>{
    console.log('gulp运行了')
    gulp.src('./src/css/base.css')
    .pipe(gulp.dest('./dist/css'))
}) */
// html任务
// 1、html文件中代码的压缩操作
// 2、抽取html文件中的公共代码
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        // 压缩html文件中的代码
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dest'))
})

// 压缩css
gulp.task('cssmin',()=>{
    gulp.src('./dist/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
    
})
// 复制文件夹任务
gulp.task('copy', () => {
    gulp.src('./dist/css/*.css')
        .pipe(gulp.dest('dist'))
})

// 构建任务
gulp.task('default',['cssmin'])