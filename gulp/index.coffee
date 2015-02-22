global.gulp    = require("gulp")
global.gutil   = require("gulp-util")
global.plumber = require("gulp-plumber")
global.path    = require("path")
global.paths   = require("./paths")
runSequence    = require("run-sequence")

cleanTask    = require("./tasks/clean")
ejsTask      = require("./tasks/ejs")
cssTask      = require("./tasks/css")
jsTask       = require("./tasks/js")
assetsTask   = require("./tasks/assets")
# serverTask   = require("./tasks/server")
testTask     = require("./tasks/test")
watchTask    = require("./tasks/watch")

gulp.task "default", (callback) ->
  runSequence "clean", "ejs", "css", "js", "assets", callback
