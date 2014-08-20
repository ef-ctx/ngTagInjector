module.exports = function (grunt) {
	'use strict';

	grunt.registerTask('build', [
		'clean:build',
		'clean:coverage',
		'jsbeautifier:modify',
		'jsbeautifier:verify',
		'jshint'
	]);

};
