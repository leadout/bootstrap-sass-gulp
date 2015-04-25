'use strict';

var gulp   = require('gulp');

gulp.task('copyIcons', function() {

	// Copy icons from root directory to build/
	return gulp.src(['./app/assets/img/favicon/*.png', './app/img/favicon.ico'])
		.pipe(gulp.dest('build/img/favicon/'));

});