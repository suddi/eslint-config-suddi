'use strict';

const assert = require('assert');

const config = require('../frontend');
const lint = require('./utils/lint');

describe('Testing frontend eslint configuration', function () {
    it('CASE 1: no errors', function () {
        const code = "'use strict';\n\nmodule.exports = function () {\n    return 42;\n};\n";
        const errors = lint(code, config);

        assert.equal(errors.length, 0);
    });
});