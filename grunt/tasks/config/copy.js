module.exports = {

	build_appjs: {
		files: [{
			src: ['<%= app_files %>'],
			dest: '<%= build_dir %>/',
			cwd: '.',
			expand: true
		}]
	},

	// renames one of the files generated per environment ("-ci", "-local") to the default filename "index.html"
	fix_docs_examples: {
		files: [{
			src: ['**/*-local.html'],
			dest: '<%= build_dir %>/docs/examples/',
			cwd: '<%= build_dir %>/docs/examples/',
			expand: true,
			rename: function (dest, src) {
				'use strict';
				return dest = dest + src.substring(0, src.indexOf('index-')) + 'index.html';
			}
		}]
	}

};
