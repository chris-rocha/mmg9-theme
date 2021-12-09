const gulp = require('gulp'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack = require('webpack-stream'),
    paths = {
      sass: ['scss/**/*.scss'],
      scripts: ['src/**/*.js', 'src/**/*.vue']
    };

scss.compiler = require('node-sass');

function styles() {
  return gulp.src(paths.sass)
    .pipe(scss({outputStyle: 'compact'}).on('error', scss.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: [
        'last 2 version',
        'ie 6-8',
        'Firefox > 20'
      ],
      grid: true, //'autoplace',
      cascade: false
    }))
    .pipe(gulp.dest('stylesheets'));
}

exports.styles = styles;

function scripts() {
  return gulp.src(paths.scripts)
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('js'));
}

exports.scripts = scripts;

function watch(done) {
  gulp.watch(paths.sass, styles);
  gulp.watch(paths.scripts, scripts);
  done();
}

exports.watch = gulp.series(watch);

exports.default = gulp.series(exports.styles, exports.scripts);
