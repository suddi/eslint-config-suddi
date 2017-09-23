'use strict';

module.exports = {
    extends: [
        './node.js'
    ].map(require.resolve),

    env: {
        browser: false,

        mocha: true
    },

    ecmaFeatures: {
        generators: true
    },

    rules: {
        // http://eslint.org/docs/rules/indent
        indent: ['error', 'tab', {
            SwitchCase: 1
        }]
    }
};
