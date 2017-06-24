'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const babel = require("gulp-babel");

gulp.task('sass', () =>
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    // .pipe(browserSync.reload({
    //   stream: true
    // }))
);

gulp.task('browserSync', () =>
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
)

gulp.task('autoprefixer', () =>
  gulp.src('./sass/*.scss')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('babel', () => 
  gulp.src('./js/main.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/js'))
);

gulp.task('default', ['browserSync'], () => 
  gulp.watch(['./sass/*.scss', '*.html', './js/*.js'], ['sass', 'autoprefixer', 'babel'])
);
