symlink = require("gulp-sym")

setPath = (p, files) ->
  files.map (file) -> path.join(p, path.basename(file))

# Symlink our stuff into the wordpress structure
gulp.task "symlink", ->
  # wordpress/heroku/ember files
  gulp.src(config.symlink.src)
    .pipe(plumber())
    .pipe symlink(setPath(config.symlink.dest, config.symlink.src), {
      force: true
      relative: true
    })
