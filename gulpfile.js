'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// gulp.task('autoprefixer', () =>
//   gulp.src('./css/main.css')
//   .pipe(autoprefixer({
//     browsers: ['last 2 versions'],
//     cascade: false
//   }))
//   .pipe(gulp.dest('./dist/css'))
// );

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

gulp.task('default', ['browserSync', 'sass'], function() {
  gulp.watch(['./sass/*.scss', '*.html', './js/*.js'], ['sass']);
});
