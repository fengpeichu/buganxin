var gulp = require('gulp');

var sass = require('gulp-sass'); //css插件

var uglify = require('gulp-uglify'); //压缩js

var bcss = require('gulp-clean-css'); //压缩css

var autoprefixer = require('gulp-autoprefixer'); //添加前缀

var concat = require('gulp-concat'); //合并文件

gulp.task('Bsass', function() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(concat('all.css'))
        .pipe(bcss())
        .pipe(gulp.dest('./src/css'));
})