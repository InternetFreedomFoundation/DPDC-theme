var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');

// Ghost theme install path
var ghostThemePath = '<local_ghost_install_folder>/content/themes/dpdc';

var swallowError = function swallowError(error) {
  gutil.log(error.toString());
  gutil.beep();
  this.emit('end');
};

var nodemonServerInit = function () {
  livereload.listen();
};

gulp.task('build', ['css', 'js'], function (/* cb */) {
  return nodemonServerInit();
});

gulp.task('generate', ['css', 'js']);

gulp.task('css', function () {
  var processors = [
    easyimport,
    customProperties,
    colorFunction(),
    autoprefixer({ browsers: ['last 2 versions'] }),
    cssnano(),
  ];

  return gulp
    .src('assets/css/screen.css')
    .on('error', swallowError)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/built/'))
    .pipe(livereload());
});

gulp.task('js', function () {
  var jsFilter = filter(['**/*.js'], { restore: true });

  return gulp
    .src('assets/js/*.js')
    .on('error', swallowError)
    .pipe(sourcemaps.init())
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/built/'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  gulp.watch('assets/css/**/*.css', ['css']);
  gulp.watch('assets/js/**/*.js', ['js']);
  gulp.watch(['./**/*.hbs', 'assets/**/*.css', 'assets/**/*.js'], ['copy']);
});

gulp.task('copy', ['css', 'js'], function () {
  var files = [
    '**/*',
    '!node_modules',
    '!dist',
    '!gulpfile.js',
    '!npm-shrinkwrap.json',
    '!package-lock.json',
    '!README.md',
  ];

  return gulp.src(files).pipe(gulp.dest(ghostThemePath));
});

gulp.task('zip', ['css', 'js'], function () {
  var targetDir = 'dist/';
  var themeName = require('./package.json').name;
  var filename = themeName + '.zip';
  return gulp
    .src(['**', '!node_modules', '!node_modules/**', '!dist', '!dist/**'])
    .pipe(zip(filename))
    .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});
