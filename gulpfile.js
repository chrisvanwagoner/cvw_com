'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  imagemin = require('gulp-imagemin');
  // pug = require('gulp-pug');

var browserSync = require('browser-sync').create();
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

/* Concatenate the listed scripts, map them, and output into a single file */
gulp.task("concatScripts", function() {
    return gulp.src([
        'src/js/lib/anime.min.js',
        'src/js/lib/wow.min.js',
        'src/js/runthis.js'
        ])
    .pipe(maps.init())
    .pipe(concat('scripts.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/js'));
});

/* Take the file output by concatScripts, and minify it */
gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("src/js/scripts.js")
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('src/js'));
});

/* Compile SCSS to CSS */
gulp.task('sass', function() {
  return gulp.src("src/scss/main.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.stream());
});

/* Look for changes to any SCSS file in scss directory, to any HTML file, and to any JS file in the js directory */
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', ['concatScripts', browserSync.reload]);
});

gulp.task('images', function(){
  return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin([
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({plugins: [{removeViewBox: true}]})
  ]))
  .pipe(gulp.dest('dist/images'))
});

/* Delete the dist directory and the generated CSS files */
gulp.task('del', function() {
  del(['dist', 'src/css/main.css*']);
});


// Grab index.html posts generated by Hugo and copy them to dist/clients
gulp.task('getHugoPosts', function() {
  return gulp.src(['src/clients/public/posts/**/*'])
    .pipe(gulp.dest('dist/clients'));
});

// Grab the CSS, JS, and images for the Hugo posts and copy them to the dist/clients directory
gulp.task('getHugoEtc', ['getHugoPosts'], function() {
  gulp.src(['src/clients/public/css/**/*','src/clients/public/images/**/*','src/clients/public/js/**/*'], { base: 'src/clients/public'})
  .pipe(gulp.dest('dist/clients'));
});

gulp.task("build", ['sass', 'minifyScripts', 'images'], function() {
  return gulp.src([
    "src/css/lib/normalize.css",
    "src/css/lib/animate.min.css",
    "src/css/main.css*",
    "src/index.html",
    "src/js/scripts.min.js",
    "src/fonts/**",
    "src/robots.txt"
    ], { base: 'src'})
    .pipe(gulp.dest('dist'));
});

gulp.task("default", ["build"]);
