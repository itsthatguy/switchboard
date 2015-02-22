# Watch
gulp.task 'watch', ['default'], ->
  gulp.watch(config.css.watch, ['css'])
  gulp.watch(config.js.watch, ['js'])
  gulp.watch(config.assets.watch, ['assets'])
  gulp.watch(config.ejs.watch, ['ejs'])

  if (process.env.ENVIRONMENT == "DEVELOPMENT")
    livereload = require('gulp-livereload')
    server = livereload()

    gulp.watch(path.join(config.BASE_GENERATED_PATH, '**'))
      .on 'change', (file) -> server.changed(file.path)
