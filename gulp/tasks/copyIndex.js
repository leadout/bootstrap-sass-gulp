'use strict';

var gulp   = require('gulp');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var config = require('../config');

gulp.task('copyIndex', function() {

	gulp.src(config.sourceDir + 'index.html').pipe(gulp.dest(config.buildDir)).pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));;

});