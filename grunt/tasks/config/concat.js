module.exports = {

	compile_js: {

		options: {
			banner: '<%= meta.banner %>'
		},

		src: [
			'<%= app_files %>'
		],

		dest: '<%= compile_dir %>/<%= pkg.name %>.js'
	}

};
