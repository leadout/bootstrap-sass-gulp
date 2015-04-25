'use strict';

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var sourcemaps   = require('gulp-sourcemaps');
var rename       = require('gulp-rename');
var watchify     = require('watchify');
var browserify   = require('browserify');
var babelify     = require('babelify');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var debowerify   = require('debowerify');
var handleErrors = require('../util/handle-errors');
var config       = require('../config');

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {

	var bundler = browserify({
		entries: [
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
            //'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
            './bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
            './app/app.js'
        ],
		debug: !global.isProd,
		cache: {},
		packageCache: {},
		fullPaths: true
	});

	if ( watch ) {
		bundler = watchify(bundler);
		bundler.on('update', function() {
			rebundle();
		});
	}

	bundler.transform(babelify);
	bundler.transform(debowerify);

	function rebundle() {
		var stream = bundler.bundle();

		gutil.log('Rebundle...');

		return stream.on('error', handleErrors)
			.pipe(source(file))
			.pipe(gulpif(global.isProd, streamify(uglify())))
			.pipe(streamify(rename({
				basename: 'app'
			})))
			.pipe(gulpif(!global.isProd, sourcemaps.write('./')))
			.pipe(gulp.dest(config.scripts.dest))
			.pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
	}

	return rebundle();

}

gulp.task('browserify', function() {

	// Only run watchify if NOT production
	return buildScript('app.js', !global.isProd);

});