var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');
gulp.task('serve', function() {
  browserSync({
    port: 5000,
    notify: false,
    server: {
      baseDir: ['.'],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(['*.html'], reload);
  gulp.watch(['*.css'], reload);

});
