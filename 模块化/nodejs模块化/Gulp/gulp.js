// glup.src()  获取任务要处理的文件
// glup.dest() 输出文件
// glup.task() 建立gulp任务
// gulp.watch() 监控文件的变化
const gulp = require('gulp')

gulp.task('one',()=>{
    console.log('gulp运行了')
    gulp.src('./src/css/base.css')
    .pipe(gulp.dest('./dist/css'))
})