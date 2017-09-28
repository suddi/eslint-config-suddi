'use strict';

module.exports = {
    extends: [
        './node.js'
    ].map(require.resolve),

    rules: {
        // https://eslint.org/docs/rules/indent
        indent: ['error', 'tab', {
            SwitchCase: 1
        }]
    }
};
