'use strict';

module.exports = {
    parserOptions: {

        ecmaVersion: 2017,

        sourceType: 'module',

        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },

    env: {
        browser: false,
        es6: true,
        mocha: true,
        node: true
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

        // http://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // http://eslint.org/docs/rules/getter-return
        'getter-return': ['error', {
            allowImplicit: true
        }],

        // http://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // http://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // http://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 'error',

        // http://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // http://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        // http://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'error',

        // http://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // http://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'error',

        // http://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // http://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 'error',

        // http://eslint.org/docs/rules/no-empty
        'no-empty': ['error', {
            allowEmptyCatch: true
        }],

        // http://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 'error',

        // http://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 'error',

        // http://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // http://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': 'off',

        // http://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 'error',

        // http://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 'error',

        // http://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': 'error',

        // http://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 'error',

        // http://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 'error',

        // http://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 'error',

        // http://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // http://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 'error',

        // http://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',

        // http://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // http://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // http://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // http://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // http://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // http://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',

        // http://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'error',

        // http://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', {
            requireStringLiterals: true
        }],

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // http://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': 'error',

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
