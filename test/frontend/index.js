'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;

const config = require('../../frontend');
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

describe('Integration Tests for the Frontend eslint configuration', function () {
    const filenames = fs.readdirSync(getPath('fixtures')).filter(function (filename) {
        return filename.endsWith('.jsx');
    });

    filenames.map(function (filename, index) {
        it(`CASE ${index + 1}: Testing ${filename}`, function () {
            const code = fs.readFileSync(getPath('fixtures', filename)).toString();
            const assertion = assertions.get(filename.replace('.jsx', ''));
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
