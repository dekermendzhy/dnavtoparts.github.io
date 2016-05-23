// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglifycss = require('gulp-uglifycss');

gulp.task('concat', function() {
    return gulp.src('css/style.css')
        .pipe(concat('style.main.css'))
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

gulp.task('css', function () {
  gulp.src('css/style.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('css/dist'));
});
