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
const minifyCssNames = require('gulp-minify-cssnames');

const babel = require('gulp-babel');
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
    .pipe(pug())
    .pipe(gulp.dest('./src'))
    .pipe(browsersync.stream());
}

/* Transpile SCSS to minified CSS */
function styles() {
  return gulp
    .src([
      'src/css/lib/animate.min.css',
      'src/scss/main.scss'
    ])
    .pipe(concat('styles.scss'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/css'))
    // .src(['src/css/styles.css'])
    // .pipe(cssmin())
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(gulp.dest('src/css'))
    .pipe(browsersync.stream());
}

/* Concatenate and minify scripts */
function scripts() {
  return gulp
    .src([
      // 'src/js/lib/jquery.min.js',
      // 'src/js/lib/gsap.min.js',
      // 'src/js/lib/anime.min.js',
      // 'src/js/lib/wow.min.js',
      'node_modules/vue/dist/vue.min.js',
      // 'src/js/lib/basicScroll.min.js',
      'src/js/lib/lazysizes.min.js',
      'src/js/app.js',
      // 'src/js/app-cloudinary.js',
      'src/js/runthis.js',
      // 'src/js/lazyload.js',
    ])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('src/js'))
    // .pipe(uglify())
    // .pipe(babel({presets: ['minify']}))
    // .pipe(rename('scripts.min.js'))
    // .pipe(gulp.dest('src/js'));
}

// Images
function images() {
  return gulp
    .src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(gulp.dest('/images'))
}

/* Delete the /dist directory contents */
function clean() {
  return del([
    'dist/*',
    "src/css/styles.min.css",
    "src/js/scripts.min.js"
  ]);
}

// function cssClasses() {
//   return gulp
//     .src([
//       // './dist/js/scripts.min.js',
//       './dist/css/styles.min.css',
//       './dist/index.html'
//     ])
//     .pipe(minifyCssNames({
//       prefix: 'm-',
//       postfix: ''
//     }))
//     .pipe(gulp.dest('./dist'));
// }

// Build site in /dist
function build() {
  gulp
    .src(['src/js/scripts.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    // .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('dist/js'));
  
  gulp
    .src(['src/css/styles.css'])
    .pipe(cssmin())
    // .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
  
  gulp
    .src(['src/index.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));

  return gulp
    .src([
      "src/images/**",
      "src/fonts/**",
      "src/humans.txt",
      "src/robots.txt"
    ], { base: './src' })
    .pipe(gulp.dest('./dist'));
}


// Watch files
function watchFiles() {
  gulp.watch("./src/scss/**/*", styles);
  gulp.watch("./src/js/**/*", scripts);
  gulp.watch('./src/index.pug', html);
}

// define complex tasks
const start = gulp.series(styles, scripts, html);
const watch = gulp.parallel(watchFiles, browserSync);
const run = gulp.series(start, watch);
const prod = gulp.series(clean, build);

// export tasks
exports.images = images;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
// exports.cssClasses = cssClasses;
exports.build = build;
exports.start = start;
exports.watch = watch;
exports.run = run;
exports.default = run;
exports.prod = prod;