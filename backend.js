'use strict';

module.exports = {
    extends: 'xo',

    env: {
        browser: false,

        mocha: true
    },

    ecmaFeatures: {
        generators: true
    },

    // http://eslint.org/docs/rules/
    rules: {
        /**
         * +++++++++++++++++++
         * + Possible Errors +
         * +++++++++++++++++++
         */

        // http://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // http://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'error',

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // http://eslint.org/docs/rules/class-methods-use-this
        // 'class-methods-use-this': 'error',

        // http://eslint.org/docs/rules/complexity
        complexity: ['error', {
            max: 5
        }],

        // http://eslint.org/docs/rules/consistent-return
        // 'consistent-return': ['error', {
            // treatUndefinedAsUnspecified: true
        // }],

        // http://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': ['error', {
            props: true
        }],

        /**
         * +++++++++++++
         * + Variables +
         * +++++++++++++
         */

        // http://eslint.org/docs/rules/no-catch-shadow
        'no-catch-shadow': 'error',

        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': ['error', {
            builtinGlobals: true
        }],

        // http://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': ['error', {
            args: 'none',
            vars: 'local',
            varsIgnorePattern: '^_'
        }],

        /**
         * +++++++++++++++++++++++++
         * + Node.JS and Common JS +
         * +++++++++++++++++++++++++
         */

        // http://eslint.org/docs/rules/no-restricted-modules
        'no-restricted-modules': 'off',

        /**
         * ++++++++++++++++++++
         * + Stylistic Issues +
         * ++++++++++++++++++++
         */

        // http://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': 'off',

        // http://eslint.org/docs/rules/indent
        indent: ['error', 4, {
            SwitchCase: 1
        }],

        // http://eslint.org/docs/rules/max-params
        'max-params': ['error', 6],

        // http://eslint.org/docs/rules/new-cap
        'new-cap': 'error',

        /**
         * ++++++++++++++++
         * + ECMAScript 6 +
         * ++++++++++++++++
         */

        // http://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', 'after'],

        // http://eslint.org/docs/rules/max-len
        'max-len': ['error', 200, 2, {
            ignoreUrls: false,
            ignoreComments: false
        }],

        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 'off',

        // http://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'off',

        // http://eslint.org/docs/rules/prefer-const
        'prefer-const': 'error',

        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 'off'
    }
};
