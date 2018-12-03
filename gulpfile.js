var gulp = require('gulp');

var sass = require('gulp-sass'); //css插件

var uglify = require('gulp-uglify'); //压缩js

var bcss = require('gulp-clean-css'); //压缩css

var autoprefixer = require('gulp-autoprefixer'); //添加前缀

var concat = require('gulp-concat'); //合并文件

var server = require('gulp-webserver'); //起服务

// var babel = require('gulp-babel'); //es5->es6

//css
gulp.task('Bsass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        .pipe(bcss())
        .pipe(gulp.dest('./src/css'));
});
//js
gulp.task('bjs', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js'))
});
//监听
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('Bsass'));
    gulp.watch('./src/js/*.js', gulp.series('bjs'));
});

//起服务
gulp.task('Servers', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8989,
            livereload: true,
            midderware: function(req, res, next) {

            }
        }))

})

//开发环境
gulp.task('dev', gulp.series('Bsass', 'bjs', 'Servers', 'watch'))

//线上环境