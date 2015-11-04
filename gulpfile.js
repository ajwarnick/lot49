var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");

gulp.task('default', function(){
  // Default task code
});


// task
gulp.task('compile-sass', function () {
    gulp.src('sass/one.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});
