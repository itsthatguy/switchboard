coffee     = require('gulp-coffee')
sourcemaps = require('gulp-sourcemaps')

# Task
gulp.task 'js', ->
  return gulp.src(config.js.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(coffee())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.js.dest))
