module.exports = {

	/**
	 * By default, we want the Live Reload to work for all tasks; this is
	 * overridden in some tasks (like this file) where browser resources are
	 * unaffected. It runs by default on port 35729, which your browser
	 * plugin should auto-detect.
	 */
	options: {
		livereload: false
	},

	/**
	 * When the Gruntfile changes, we just want to lint it. In fact, when
	 * your Gruntfile changes, it will automatically be reloaded!
	 */
	gruntfile: {
		files: 'Gruntfile.js',
		tasks: ['jshint:gruntfiles'],
		options: {
			livereload: false
		}
	},

	/**
	 * When our JavaScript source files change, we want to lint them and then run our unit tests.
	 */
	jssrc: {
		files: [
			'<%= app_files %>'
		],
		tasks: ['jshint:src', 'karma:unit', 'copy:build_appjs' /*, 'docs'*/ ]
	},

	/**
	 * When a JavaScript unit test file changes, we only want to lint it and
	 * run the unit tests. We don't want to do any live reloading.
	 */
	jsunit: {
		files: [
			'<%= test_files %>'
		],
		tasks: ['jshint:test', 'karma:unit'],
		options: {
			livereload: false
		}
	}

};
