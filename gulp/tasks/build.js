'use strict';

gulp.task('build', ['default'], function() {
  var nw = new $.nodeWebkitBuilder({
      files: './dist/**/*', // use the glob format
      version: '0.11.6',
      platforms: ['win32', 'win64']
  });

  nw.build().then(function() {
    console.log('DONE');
  }).catch(function (error) {
    console.error(error);
  });
});
