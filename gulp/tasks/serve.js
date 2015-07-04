/* global config, $ */
'use strict';

// run a server for development with browsersync
gulp.task('serve', ['watch'], function() {
  global.environment = 'browser';
  $.browserSync.init(config.serve.browserSyncOptions);
});
