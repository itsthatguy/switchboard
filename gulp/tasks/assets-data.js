/* global config */
gulp.task('assets:data', function() {
  return gulp.src(config.assetsData.src, {base: './src'})
  .pipe(gulp.dest(config.assetsData.dest));
});
