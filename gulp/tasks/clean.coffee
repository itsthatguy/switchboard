del = require('del')

gulp.task 'clean', ->
  del(paths.clean)
