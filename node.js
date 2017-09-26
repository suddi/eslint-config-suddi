'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,

        sourceType: 'module',

        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            generators: true,
            jsx: true
        }
    },

    env: {
        browser: false,
        es6: true,
        mocha: true,
        node: true
    },

    // https://eslint.org/docs/rules/
    rules: {
        /**
         * +++++++++++++++++++
         * + Possible Errors +
         * +++++++++++++++++++
         */

        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', {
            allowImplicit: true
        }],

        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 'error',

        // https://eslint.org/docs/rules/no-console
        'no-console': 'warn',

        // https://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        // https://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'error',

        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'error',

        // https://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // https://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 'error',

        // https://eslint.org/docs/rules/no-empty
        'no-empty': ['error', {
            allowEmptyCatch: true
        }],

        // https://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 'error',

        // https://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 'error',

        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': 'off',

        // https://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 'error',

        // https://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 'error',

        // https://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': 'error',

        // https://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 'error',

        // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 'error',

        // https://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 'error',

        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // https://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 'error',

        // https://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',

        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // https://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',

        // https://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'error',

        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', {
            requireStringLiterals: true
        }],

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // https://eslint.org/docs/rules/accessor-pairs
        'accessor-pairs': 'error',

        // https://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 'error',

        // https://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 'error',

        // https://eslint.org/docs/rules/class-methods-use-this
        // 'class-methods-use-this': 'error',

        // https://eslint.org/docs/rules/complexity
        'complexity': ['error', {
            max: 5
        }],

        // https://eslint.org/docs/rules/consistent-return
        // 'consistent-return': ['error', {
        //     treatUndefinedAsUnspecified: true
        // }],

        // https://eslint.org/docs/rules/curly
        'curly': 'error',

        // https://eslint.org/docs/rules/default-case
        'default-case': 'error',

        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // https://eslint.org/docs/rules/dot-notation
        'dot-notation': 'error',

        // https://eslint.org/docs/rules/eqeqeq
        'eqeqeq': 'error',

        // https://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 'error',

        // https://eslint.org/docs/rules/no-alert
        'no-alert': 'error',

        // https://eslint.org/docs/rules/no-caller
        'no-caller': 'error',

        // https://eslint.org/docs/rules/no-case-declarations
        'no-case-declarations': 'error',

        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'error',

        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 'error',

        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': 'off',

        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // https://eslint.org/docs/rules/no-eq-null
        'no-eq-null': 'error',

        // https://eslint.org/docs/rules/no-eval
        'no-eval': 'error',

        // https://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 'error',

        // https://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 'error',

        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // https://eslint.org/docs/rules/no-fallthrough
        'no-fallthrough': 'error',

        // https://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 'error',

        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': 'error',

        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': 'error',

        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'error',

        // https://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 'error',

        // https://eslint.org/docs/rules/no-iterator
        'no-iterator': 'error',

        // https://eslint.org/docs/rules/no-labels
        'no-labels': 'error',

        // https://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 'error',

        // https://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 'error',

        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': 'off',

        // https://eslint.org/docs/rules/no-multi-spaces
        'no-multi-spaces': 'error',

        // https://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 'error',

        // https://eslint.org/docs/rules/no-new
        'no-new': 'error',

        // https://eslint.org/docs/rules/no-new-func
        'no-new-func': 'error',

        // https://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 'error',

        // https://eslint.org/docs/rules/no-octal
        'no-octal': 'error',

        // https://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 'error',

        // https://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': ['error', {
            props: true
        }],

        // https://eslint.org/docs/rules/no-proto
        'no-proto': 'error',

        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'error',

        // https://eslint.org/docs/rules/no-return-assign
        'no-return-assign': ['error', 'always'],

        // https://eslint.org/docs/rules/no-return-await
        'no-return-await': 'error',

        // https://eslint.org/docs/rules/no-script-url
        'no-script-url': 'error',

        // https://eslint.org/docs/rules/no-self-assign
        'no-self-assign': ['error', {
            props: true
        }],

        // https://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 'error',

        // https://eslint.org/docs/rules/no-sequences
        'no-sequences': 'error',

        // https://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 'error',

        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'error',

        // https://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 'error',

        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

        // https://eslint.org/docs/rules/no-useless-call
        'no-useless-call': 'error',

        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // https://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // https://eslint.org/docs/rules/no-warning-comments
        'no-warning-comments': 'warn',

        // https://eslint.org/docs/rules/no-with
        'no-with': 'error',

        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['error', {
            allowEmptyReject: true
        }],

        // https://eslint.org/docs/rules/radix
        'radix': 'error',

        // https://eslint.org/docs/rules/require-await
        'require-await': 'error',

        // https://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 'error',

        // https://eslint.org/docs/rules/wrap-iife
        'wrap-iife': ['error', 'inside', {
            functionPrototypeMethods: true
        }],

        // https://eslint.org/docs/rules/yoda
        'yoda': 'error',

        /**
         * +++++++++++++++
         * + Strict Mode +
         * +++++++++++++++
         */

        // https://eslint.org/docs/rules/strict
        'strict': 'off',

        /**
         * +++++++++++++
         * + Variables +
         * +++++++++++++
         */

        // https://eslint.org/docs/rules/init-declarations
        'init-declarations': 'off',

        // https://eslint.org/docs/rules/no-catch-shadow
        'no-catch-shadow': 'error',

        // https://eslint.org/docs/rules/no-delete-var
        'no-delete-var': 'error',

        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // https://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': ['error', 'event'],

        // https://eslint.org/docs/rules/no-shadow
        'no-shadow': ['error', {
            builtinGlobals: true
        }],

        // https://eslint.org/docs/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 'error',

        // https://eslint.org/docs/rules/no-undef
        'no-undef': ['error', {
            typeof: true
        }],

        // https://eslint.org/docs/rules/no-undef-init
        'no-undef-init': 'off',

        // https://eslint.org/docs/rules/no-undefined
        'no-undefined': 'off',

        // https://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': ['error', {
            args: 'none',
            vars: 'local',
            varsIgnorePattern: '^_'
        }],

        // https://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': ['error', 'nofunc'],

        /**
         * +++++++++++++++++++++++++
         * + Node.JS and Common JS +
         * +++++++++++++++++++++++++
         */

        // https://eslint.org/docs/rules/callback-return
        // Disabled because of https://github.com/eslint/eslint/issues/3420
        // 'callback-return': ['warn', ['cb', 'callback', 'next', 'done']],

        // https://eslint.org/docs/rules/global-require
        'global-require': 'off',

        // https://eslint.org/docs/rules/handle-callback-err
        'handle-callback-err': 'warn',

        // https://eslint.org/docs/rules/no-buffer-constructor
        'no-buffer-constructor': 'error',

        // https://eslint.org/docs/rules/no-mixed-requires
        'no-mixed-requires': ['error', {
            grouping: true,
            allowCall: true
        }],

        // https://eslint.org/docs/rules/no-new-require
        'no-new-require': 'error',

        // https://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 'error',

        // https://eslint.org/docs/rules/no-process-env
        'no-process-env': 'off',

        // https://eslint.org/docs/rules/no-process-exit
        'no-process.exit': 'off',

        // https://eslint.org/docs/rules/no-restricted-modules
        'no-restricted-modules': 'off',

        // https://eslint.org/docs/rules/no-sync
        'no-sync': 'off',

        /**
         * ++++++++++++++++++++
         * + Stylistic Issues +
         * ++++++++++++++++++++
         */

        // https://eslint.org/docs/rules/array-bracket-newline
        'array-bracket-newline': 'off',

        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/array-element-newline
        'array-element-newline': 'off',

        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': 'error',

        // https://eslint.org/docs/rules/brace-style
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],

        // https://eslint.org/docs/rules/camelcase
        'camelcase': ['error', {
            properties: 'never'
        }],

        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': ['error', 'always', {
            // You can also ignore this rule by wrapping the first word in quotes
            ignorePattern: 'pragma|ignore',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true
        }],

        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],

        // https://eslint.org/docs/rules/comma-style
        'comma-style': ['error', 'last'],

        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': 'off',

        // https://eslint.org/docs/rules/eol-last
        'eol-last': 'error',

        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': 'error',

        // https://eslint.org/docs/rules/func-names
        'func-names': ['error', 'never'],

        // https://eslint.org/docs/rules/func-style
        'func-style': 'off',

        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': 'off',

        // https://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 'off',

        // https://eslint.org/docs/rules/id-length
        'id-length': 'off',

        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // https://eslint.org/docs/rules/indent
        'indent': ['error', 4, {
            SwitchCase: 1
        }],

        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['error', 'prefer-single'],

        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],

        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': 'error',

        // https://eslint.org/docs/rules/line-comment-position
        'line-comment-position': 'off',

        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': ['error', 'unix'],

        // https://eslint.org/docs/rules/lines-around-comment
        'lines-around-comment': 'off',

        // https://eslint.org/docs/rules/max-depth
        'max-depth': 'warn',

        // https://eslint.org/docs/rules/max-len
        'max-len': ['error', 200, 2, {
            ignoreUrls: false,
            ignoreComments: false
        }],

        // https://eslint.org/docs/rules/max-lines
        'max-lines': 'off',

        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': ['warn', 4],

        // https://eslint.org/docs/rules/max-params
        'max-params': ['error', 6],

        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': 'error',

        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': 'off',

        // https://eslint.org/docs/rules/new-cap
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true
        }],

        // https://eslint.org/docs/rules/new-parens
        'new-parens': 'error',

        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 'error',

        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // https://eslint.org/docs/rules/no-continue
        'no-continue': 'off',

        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 'off',

        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': 'error',

        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': 'error',

        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 'error',

        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', {
            max: 1
        }],

        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'error',

        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'error',

        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 'error',

        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': ['error', 'WithStatement'],

        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 'off',

        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 'off',

        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': 'error',

        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',

        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': 'error',

        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': 'off',

        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': 'off',

        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': 'off',

        // https://eslint.org/docs/rules/one-var
        'one-var': ['error', 'never'],

        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': 'error',

        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['error', 'always'],

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'after'],

        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': ['error', 'never'],

        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': 'off',

        // https://eslint.org/docs/rules/quote-props
        'quote-props': ['error', 'consistent-as-needed'],

        // https://eslint.org/docs/rules/quotes
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true
        }],

        // https://eslint.org/docs/rules/require-jsdoc
        'require-jsdoc': 'off',

        // https://eslint.org/docs/rules/semi
        'semi': ['error', 'always'],

        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': ['error', {
            before: false,
            after: true
        }],

        // https://eslint.org/docs/rules/semi-style
        'semi-style': ['error', 'last'],

        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': 'off',

        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 'error',

        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': ['error', 'always'],

        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],

        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': ['error', 'never'],

        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'error',

        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': 'error',

        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '+', '*'],
                markers: ['!', '/']
            },
            block: {
                exceptions: ['-', '+', '*'],
                markers: ['!', '*'],
                balanced: true
            }
        }],

        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['error', {
            after: true,
            before: false
        }],

        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['error', 'never'],

        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 'off',

        /**
         * ++++++++++++++++
         * + ECMAScript 6 +
         * ++++++++++++++++
         */

        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': ['error', 'as-needed'],

        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['error', 'always'],

        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', {
            before: true,
            after: true
        }],

        // https://eslint.org/docs/rules/constructor-super
        'constructor-super': 'error',

        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', 'after'],

        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': 'error',

        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 'error',

        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // https://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': 'off',

        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'error',

        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'error',

        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': 'error',

        // https://eslint.org/docs/rules/no-var
        'no-var': 'off',

        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': 'off',

        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': 'off',

        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': 'error',

        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': ['error', {
            array: false,
            object: false
        }, {
            enforceForRenamedProperties: false
        }],

        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'off',

        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'off',

        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'off',

        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',

        // https://eslint.org/docs/rules/require-yield
        'require-yield': 'error',

        // https://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': ['error', 'never'],

        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': 'error',

        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 'error',

        // https://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': 'error',

        // https://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['error', 'after']
    }
};
