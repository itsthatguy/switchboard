/* global config, $ */
gulp.task('lint', function() {
  return gulp.src(config.lint.src)
  .pipe($.plumber())
  .pipe($.eslint())
  .pipe($.eslint.format())
  .on('error', $.util.log);
});
