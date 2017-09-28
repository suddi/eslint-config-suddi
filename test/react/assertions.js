'use strict';

/* eslint camelcase: off */

module.exports.get = function (rule) {
    const rules = {
        /**
         * +++++++++++++++++++
         * + Possible Errors +
         * +++++++++++++++++++
         */

        // http://eslint.org/docs/rules/no-console
        no_console: {
            numError: 1,
            ruleId: 'no-console',
            severity: 1
        },

        // http://eslint.org/docs/rules/valid-jsdoc
        valid_jsdoc: {
            numError: 1,
            ruleId: 'valid-jsdoc',
            severity: 2
        },

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // http://eslint.org/docs/rules/complexity
        complexity: {
            numError: 1,
            ruleId: 'complexity',
            severity: 2
        },

        // http://eslint.org/docs/rules/no-param-reassign
        no_param_reassign: {
            numError: 2,
            ruleId: 'no-param-reassign',
            severity: 2
        },

        /**
         * +++++++++++++
         * + Variables +
         * +++++++++++++
         */

        // http://eslint.org/docs/rules/no-catch-shadow
        no_catch_shadow: {
            numError: 1,
            ruleId: 'no-catch-shadow',
            severity: 2
        },

        // http://eslint.org/docs/rules/no-shadow
        no_shadow: {
            numError: 2,
            ruleId: 'no-shadow',
            severity: 2
        },

        // http://eslint.org/docs/rules/no-unused-vars
        no_unused_vars: {
            numError: 1,
            ruleId: 'no-unused-vars',
            severity: 2
        },

        /**
         * +++++++++++++++++++++++++
         * + Node.JS and Common JS +
         * +++++++++++++++++++++++++
         */

        /**
         * ++++++++++++++++++++
         * + Stylistic Issues +
         * ++++++++++++++++++++
         */

        // http://eslint.org/docs/rules/indent
        indent: {
            numError: 4,
            ruleId: 'indent',
            severity: 2
        },

        // http://eslint.org/docs/rules/max-params
        max_params: {
            numError: 1,
            ruleId: 'max-params',
            severity: 2
        },

        // http://eslint.org/docs/rules/new-cap
        new_cap: {
            numError: 1,
            ruleId: 'new-cap',
            severity: 2
        },

        /**
         * ++++++++++++++++
         * + ECMAScript 6 +
         * ++++++++++++++++
         */

        // http://eslint.org/docs/rules/no-bitwise
        no_bitwise: {
            numError: 1,
            ruleId: 'no-bitwise',
            severity: 2
        },

        // http://eslint.org/docs/rules/generator-star-spacing
        generator_star_spacing: {
            numError: 2,
            ruleId: 'generator-star-spacing',
            severity: 2
        },

        // http://eslint.org/docs/rules/max-len
        max_len: {
            numError: 2,
            ruleId: 'max-len',
            severity: 2
        },

        // http://eslint.org/docs/rules/prefer-const
        prefer_const: {
            numError: 1,
            ruleId: 'prefer-const',
            severity: 2
        },

        /**
         * ++++++++++++++++++
         * + React-specific +
         * ++++++++++++++++++
         */

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        no_is_mounted: {
            numError: 1,
            ruleId: 'react/no-is-mounted',
            severity: 2
        },

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        prop_types: {
            numError: 1,
            ruleId: 'react/prop-types',
            severity: 2
        },

        // http://eslint.org/docs/rules/jsx-quotes
        jsx_quotes: {
            numError: 1,
            ruleId: 'jsx-quotes',
            severity: 2
        },

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        jsx_closing_bracket_location: {
            numError: 1,
            ruleId: 'react/jsx-closing-bracket-location',
            severity: 2
        }
    };

    if (rule) {
        return rules[rule];
    }
    return rules;
};
