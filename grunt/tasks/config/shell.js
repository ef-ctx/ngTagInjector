module.exports = {

	/**
	 * Cleans the docs dor
	 */
	clean_docs: {
		command: 'rm -R ./build/docs',
		options: {
			stdout: true,
			stderr: true
		}
	},

	/**
	 * Generates documentation.
	 */
	generate_docs: {
		command: 'cd docs && gulp && cd ..',
		options: {
			stdout: true,
			stderr: true,
			failOnError: true
		}
	},

	/**
	 * Publish coverage reports
	 */
	publish_coverage: {
		command: 'cp coverage build/coverage',
		options: {
			stdout: true,
			stderr: true,
			failOnError: false
		}
	}

};
