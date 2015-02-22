ejs = require("gulp-ejs")

# EJS
gulp.task 'ejs', ->
  gulp.src(paths.ejs.src)
    .pipe(plumber())
    .pipe(ejs())
    .pipe(gulp.dest(paths.ejs.dest))
