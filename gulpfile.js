var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyHtml = require("gulp-minify-html");
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");
var livereload = require('gulp-livereload');

gulp.task('default', function(){
  // Default task code
});


// task
gulp.task('compile-sass', function () {
    gulp.src('sass/one.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});



gulp.task('compile-bower-js', function () {
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
        .pipe(gulp.dest('./js/'));
    gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('./js/'));
    gulp.src('bower_components/glfx-bower/glfx.js')
        .pipe(gulp.dest('./js/'));
    gulp.src('bower_components/waypoints/lib/noframework.waypoints.js')
        .pipe(gulp.dest('./js/'));
});



gulp.task('test', function () {
    gulp.src('sass/core.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'));
});


gulp.task('mysass', function() {
  gulp.src('sass/core.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('sass/*.scss', ['mysass']);
});