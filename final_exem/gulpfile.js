'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const del = require('del');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const spritesmith = require('gulp.spritesmith');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');


gulp.task('uglify', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function (){
    return gulp.src('src/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({
            browsers: ['last 50 versions'],
            cascade: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src'));
});

gulp.task('ccsmin', function () {
	return gulp.src('src/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/css'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/sprite/*.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.sass',
            algorithm: 'left-right',
            padding: 10
        }));
    spriteData.img.pipe(gulp.dest('build/image'));
    return spriteData.css.pipe(gulp.dest('src/sass'));
});

gulp.task('image:sprite', function () {
    return gulp.src('build/image/sprite.png')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('build/image'));
});

gulp.task('image', function () {
    return gulp.src('src/image/*.*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('build/image'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('clean', function () {
    return del(['build/css', 'build/fonts', 'build/image']);
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.sass', gulp.series('sass', 'ccsmin'))
});

gulp.task('build', gulp.series('sass', 'ccsmin', 'sprite', 'image:sprite', 'image', 'fonts'));
