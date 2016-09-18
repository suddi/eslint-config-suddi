'use strict';

const eslint = require('eslint');

module.exports = function (code, config) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    return linter.executeOnText(code).results[0].messages;
};
