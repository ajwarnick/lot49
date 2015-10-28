var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');

gulp.task('default', function(){
  // Default task code
});




 
gulp.task('scripts', function() {
  return gulp.src(['/components/bootstrap/css/bootstrap.css'],
            {base: 'bower_components/'})
    //.pipe(concat('all.css'))
    .pipe(gulp.dest('./css/'));
});