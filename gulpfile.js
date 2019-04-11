var gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    htmlbeautify = require('gulp-html-beautify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');
    cleanCSS = require('gulp-clean-css');
    sourcemaps = require('gulp-sourcemaps');
    notify = require('gulp-notify');
    gutil = require('gulp-util');
    beeper = require('beeper');
    flatten = require('gulp-flatten');
    imagemin = require('gulp-imagemin');
    cache = require('gulp-cache');
    uglify = require('gulp-uglify');
    htmlclean = require('gulp-htmlclean');
    sassglob = require('gulp-sass-glob')

    onError = function (err) { // Custom error msg with beep sound and text color
        notify.onError({
          title:    "Gulp error in " + err.plugin,
          message:  err.toString()
        })(err);
        beeper(3);
        this.emit('end');
        gutil.log(gutil.colors.red(err));
    };

gulp.task('scss', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
  gulp.watch(
    ['src/scss/**/*.scss'], 
    ['scss']);
});

gulp.task('default', function () {
  gulp.start('watch');
});