'use strict';

const backendRules = require('./node');

module.exports = {
    extends: 'xo',

    env: {
        browser: false,

        mocha: true
    },

    ecmaFeatures: {
        generators: true
    },

    rules: Object.assign({}, backendRules.rules, {
        // http://eslint.org/docs/rules/indent
        indent: ['error', 'tab', {
            SwitchCase: 1
        }]
    })
};
