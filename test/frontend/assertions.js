'use strict';

/* eslint camelcase: off */

module.exports.get = function (rule) {
    const rules = {
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
