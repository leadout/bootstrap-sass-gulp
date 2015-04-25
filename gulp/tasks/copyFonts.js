'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyFonts', function() {

	gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/*').pipe(gulp.dest(config.buildDir + 'fonts/'));

});