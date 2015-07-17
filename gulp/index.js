global.gulp = require('gulp');
global.path = require('path');
global.environment = process.env.NODE_ENV || 'development';

global.$ = require('gulp-load-plugins')({
  pattern: [
    'browser-sync',
    'del',
    'gulp-eslint',
    'gulp-filter',
    'gulp-inject',
    'gulp-jade',
    'gulp-plumber',
    'gulp-sass',
    'gulp-util',
    'gulp-watch',
    'main-bower-files',
    'node-webkit-builder',
    'tosource',
    'webpack-stream',
  ]
});

require('./config');

var bulk = require('bulk-require');
bulk(__dirname, ['./tasks/*']);

gulp.task('default', ['clean', 'assets', 'js', 'sass', 'jade', 'assets:vendor', 'assets:data', 'lint']);
