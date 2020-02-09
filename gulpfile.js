'use strict';

// Load plugins
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const maps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
// const concatCss = require('gulp-concat-css');
// const imagemin = require('gulp-imagemin');
// const ImageKit = require('imagekit'); 
// const cloudinaryUpload = require('gulp-cloudinary-upload');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./src"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

/* Pug to HTML */
function html() {
  del(['src/index.html']);
  return gulp
    .src('src/index.pug')
    .pipe(pug({
      // Your options in here.
    }))
    .pipe(gulp.dest('./src'))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(browsersync.stream());
}

/* Transpile SCSS to minified CSS */
function styles() {
  return gulp
    .src([
      'src/scss/main.scss'
    ])
    // .pipe(maps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename({
      basename: "styles",
    }))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('src/css'))
    // .src(['src/css/styles.css'])
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('src/css'))
    .pipe(browsersync.stream());
}

/* Concatenate and minify scripts */
function scripts() {
  return gulp
    .src([
      // 'src/js/lib/anime.min.js',
      'src/js/lib/wow.min.js',
      // 'src/js/lib/basicScroll.min.js',
      'node_modules/vue/dist/vue.min.js',
      'src/js/app.js',
      // 'src/js/app-cloudinary.js',
      'src/js/lazyload.js',
      'src/js/runthis.js'
    ])
    // .pipe(maps.init())
    .pipe(concat('scripts.js'))
    // .pipe(maps.write('./'))
    .pipe(gulp.dest('src/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('src/js'));
}

// Images
function images() {
  return gulp
    .src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('/images'))
}

/* Delete the /dist directory contents */
function clean() {
  return del(['dist/*']);
}

// Build site in /dist
function build() {
  clean();
  return gulp
    .src([
      // "src/css/lib/normalize.css",
      "src/css/lib/animate.min.css",
      "src/index.html",
      "src/css/styles.min.css",
      "src/js/scripts.min.js",
      "src/images/**",
      "src/fonts/**",
      "src/humans.txt",
      "src/robots.txt"
      ], { base: './src' })
    .pipe(gulp.dest('./dist'))
}

// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", styles);
  gulp.watch("./src/js/**/*", scripts);
  gulp.watch('./src/index.pug', html);
}

// define complex tasks
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
