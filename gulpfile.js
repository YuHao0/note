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
    return gulp.src("./src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel', 'stylus']);