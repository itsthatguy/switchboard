/* global $ */
/* eslint new-cap: 0, no-console: 0 */
gulp.task('build', ['default'], function() {
  var nw = new $.nodeWebkitBuilder({
      files: './dist/**/*', // use the glob format
      version: '0.12.2',
      platforms: ['win32', 'win64']
  });

  nw.build().then(function() {
    $.util.log('DONE');
  }).catch(function (error) {
    $.util.error(error);
  });
});
