'use strict';

module.exports = {

	'serverport': 3000,

	'scripts': {
		'src': './app/js/**/*.js',
		'dest': './build/js/'
	},

	'images': {
		'src': './app/assets/img/*.{jpeg,jpg,png}',
		'dest': './build/img/'
	},

	'styles': {
		'src': './app/**/*.scss',
		'dest': './build/'
	},

	'sourceDir': './app/',

	'buildDir': './build/'

};