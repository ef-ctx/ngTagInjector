module.exports = {
	build_dir: 'build',
	compile_dir: 'bin',
	coverage_dir: 'coverage',
	tmp_dir: 'tmp', 

	app_files:['src/**/*.js', '!src/**/*.spec.js'],

	grunt_files: ['Gruntfile.js', 'grunt/**/*.js'],

	test_files: ['src/**/*.spec.js'],

	vendor_files: {
		js: ['vendor/angular/angular.js'],
		test: ['vendor/angular-mocks/angular-mocks.js']
	}
};
