var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('compress', function () {
    return gulp.src('./stylus/index.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./css/index'));
});

// Default gulp task to run
gulp.task('default', []);