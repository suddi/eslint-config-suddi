'use strict';

const backendRules = require('./backend').rules;

module.exports = {
    extends: [
        'xo',
        'xo-react'
    ],

    env: {
        browser: true,

        mocha: true
    },

    rules: Object.assign({}, backendRules, {
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['error', 4],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': 'error',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': ['error', {
            ignore: ['children']
        }],

        // http://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-single'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': ['error', 'after-props'],

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
        'react/forbid-component-props': 'off'
    })
};
