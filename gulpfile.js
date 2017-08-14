var gulp = require('gulp');
var stylus = require('gulp-stylus');
var babel = require("gulp-babel");

gulp.task('stylus', function () {
    return gulp.src('./src/stylus/index.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task("babel", function () {
    return gulp.src("./src/**/*.js")// ES6 源码存放的路径
        .pipe(babel())
        .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
});

gulp.task('default', []);