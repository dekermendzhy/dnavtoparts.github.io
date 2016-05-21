// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('concat', function() {
    return gulp.src('css/src/*.sass')
        .pipe(concat('style.main.sass'))
        .pipe(gulp.dest('css/'))
});

gulp.task('uglify', function() {
  return gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('css/src/*.sass')
    .pipe(sass('').on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    return gulp.src('css/src/*.sass')
        .pipe(watch('css/src/style.sass'))
        .pipe(sass())
        .pipe(gulp.dest('css'));
});