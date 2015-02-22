# Watch
gulp.task 'watch', ['default'], ->
  gulp.watch(paths.css.watch, ['css'])
  gulp.watch(paths.js.watch, ['js'])
  gulp.watch(paths.assets.watch, ['assets'])
  gulp.watch(paths.ejs.watch, ['ejs'])

  if (process.env.ENVIRONMENT == "DEVELOPMENT")
    livereload = require('gulp-livereload')
    server = livereload()

    gulp.watch(path.join(paths.BASE_GENERATED_PATH, '**'))
      .on 'change', (file) -> server.changed(file.path)
