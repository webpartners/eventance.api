var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('./api/**/*.md')
    .pipe(concat('apiary.apib'))
    .pipe(gulp.dest('./'));
});
