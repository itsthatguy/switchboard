coffee     = require('gulp-coffee')
sourcemaps = require('gulp-sourcemaps')

# Task
gulp.task 'js', ->
  return gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(paths.js.dest))
