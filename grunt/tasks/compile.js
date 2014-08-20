module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('compile', [
		'build',
		'uglify'
	]);

};
