symlink = require("gulp-sym")

# Symlink our stuff into the wordpress structure
gulp.task "symlink", ->
  # wordpress/heroku/ember files
  gulp.src(paths.symlink.src)
    .pipe(plumber())
    .pipe(symlink(paths.symlink.dest, {force: true, relative: true}))
