module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('pre-commit', [
		'jsbeautifier:verify',
		'jshint',
		'test'
	]);

};
