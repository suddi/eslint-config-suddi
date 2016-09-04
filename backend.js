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

    rules: {
        /* ++++++++++++++++++
         + Possible Errors +
         ++++++++++++++++++*/

        // http://eslint.org/docs/rules/no-console
        'no-console': 0,

        /* +++++++++++++++++
         + Best Practices +
         +++++++++++++++++*/

        // http://eslint.org/docs/rules/no-alert
        'no-alert': 0,

        // http://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': 0,

        // http://eslint.org/docs/rules/no-restricted-modules
        'no-restricted-modules': 0,

        /* ++++++++++++
         + Variables +
         ++++++++++++*/

        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': [2, {builtinGlobals: true}],

        // http://eslint.org/docs/rules/no-undef
        'no-undef': 2,

        // http://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': [2, {
            args: 'none',
            vars: 'local',
            varsIgnorePattern: '^_'
        }],

        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 1,

        /* +++++++++++++++++++
         + Stylistic Issues +
         +++++++++++++++++++*/

        // http://eslint.org/docs/rules/camelcase
        camelcase: 0,

        // don't force to add function name in anonymous function
        // http://eslint.org/docs/rules/func-names
        'func-names': 0,

        // http://eslint.org/docs/rules/indent
        indent: [2, 4, {
            SwitchCase: 1
        }],

        // http://eslint.org/docs/rules/new-cap
        'new-cap': 0,

        // http://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': 2,

        // http://eslint.org/docs/rules/quote-props
        'quote-props': 0,

        /* +++++++++++++++
         + ECMAScript 6 +
         +++++++++++++++*/

        // http://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 0,

        // http://eslint.org/docs/rules/constructor-super
        'constructor-super': 2,

        // http://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': [2, 'after'],

        // http://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 0,

        // http://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 0,

        // http://eslint.org/docs/rules/prefer-const
        'prefer-const': 0,

        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 0,

        /* +++++++++
         + Legacy +
         +++++++++*/

        // http://eslint.org/docs/rules/max-len
        'max-len': [2, 200, 2, {
            ignoreUrls: false,
            ignoreComments: false
        }],

        // http://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 2
    }
};
