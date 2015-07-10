/* global config, $ */
gulp.task('lint', function() {
  return gulp.src(config.lint.src)
  .pipe($.plumber())
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failOnError())
  .on('error', $.util.log);
});
