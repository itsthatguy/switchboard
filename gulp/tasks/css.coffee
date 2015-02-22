minifycss  = require('gulp-minify-css')
rename     = require('gulp-rename')
sourcemaps = require('gulp-sourcemaps')
stylus     = require('gulp-stylus')

# Stylus
# Get and render all .styl files recursively
gulp.task 'css', ->
  gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest))

  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(stylus())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.dest))
