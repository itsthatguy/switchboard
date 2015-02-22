# Static Assets
gulp.task 'assets', ->
  gulp.src(paths.assets.src, {base: paths.BASE_SRC_PATH})
    .pipe(plumber())
    .pipe(gulp.dest(paths.assets.dest))
