var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    tscConfig = require('./tsconfig.json');

var appSrc = 'builds/development/',
    tsSrc = 'process/typescript/';

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/angular/angular.min.js',
      'node_modules/angular-material/angular-material.min.js',
      'node_modules/angular-animate/angular-animate.min.js',
      'node_modules/angular-aria/angular-aria.min.js',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
    ])
    .pipe(gulp.dest(appSrc + 'js/lib'));
});

gulp.task('typescript', function () {
  return gulp
    .src(tsSrc + '**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest(appSrc + 'js/'));
});

gulp.task('watch', function() {
  gulp.watch(tsSrc + '**/*.ts', ['typescript']);
});

gulp.task('webserver', function() {
  gulp.src(appSrc)
    .pipe(webserver({
      livereload: true,
      port:'3000', // Open on http://localhost:3000
      open: true
    }));
});

gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
