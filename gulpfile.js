var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./htdocs"
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('./htdocs/**/*.html').on('change', reload);
    gulp.watch('./htdocs/css/*.css').on('change', reload);
    gulp.watch('./htdocs/js/*.js').on('change', reload);
});

gulp.task('default', ['browser-sync', 'watch']);
