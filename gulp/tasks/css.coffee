minifycss  = require('gulp-minify-css')
rename     = require('gulp-rename')
sourcemaps = require('gulp-sourcemaps')
stylus     = require('gulp-stylus')

# Stylus
# Get and render all .styl files recursively
gulp.task 'css', ->
  gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))

  return gulp.src(config.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.css.dest))
