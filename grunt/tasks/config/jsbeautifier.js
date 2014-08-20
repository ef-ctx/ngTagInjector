module.exports = {

	modify: {
		src: [
			'<%= app_files %>',
			'<%= test_files %>',
			'<%= grunt_files %>'
		],
		options: {
			config: '.jsbeautifyrc'
		}
	},

	verify: {
		src: [
			'<%= app_files %>',
			'<%= test_files %>',
			'<%= grunt_files %>'
		],
		options: {
			mode: 'VERIFY_ONLY',
			config: '.jsbeautifyrc'
		}
	}

};
