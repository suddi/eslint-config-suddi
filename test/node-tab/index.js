'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;

const config = require('../../angular');
const lint = require('../utils/lint');
const assertions = require('./assertions');

function getPath(directory, filename) {
	if (!directory) {
		return __dirname;
	} else if (filename) {
		return path.join(__dirname, directory, filename);
	}
	return path.join(__dirname, directory);
}

describe('Integration Tests eslint rules defined in angular.js', function () {
	const filenames = fs.readdirSync(getPath('fixtures')).filter(function (filename) {
		return filename.endsWith('.js');
	});

	filenames.map(function (filename, index) {
		it(`CASE ${index + 1}: Testing ${filename}`, function () {
			const code = fs.readFileSync(getPath('fixtures', filename)).toString();
			const assertion = assertions.get(filename.replace('.js', ''));
			const errors = lint(code, config);

			expect(errors.length).to.eql(assertion.numError);
			errors.map(function (a, error) {
				expect(error.ruleId).to.eql(a.ruleId);
				expect(error.severity).to.eql(a.severity);
				return error;
			}.bind(null, assertion));
		});
		return filename;
	});
});
