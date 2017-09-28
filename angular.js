'use strict';

module.exports = {
    extends: [
        './node-tab.js'
    ].map(require.resolve),

    plugins: [
        'angular'
    ],

    env: {
        browser: true,
        es6: true,
        mocha: true
    },

    // https://github.com/Gillespie59/eslint-plugin-angular#rules
    rules: {
        /**
         * +++++++++++++++++++
         * + Possible Errors +
         * +++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/avoid-scope-typos.md
        'angular/avoid-scope-typos': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-getter.md
        'angular/module-getter': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-setter.md
        'angular/module-setter': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-private-call.md
        'angular/no-private-call': 'error',

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/component-limit.md
        'angular/component-limit': ['warn', 3],

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-route.md
        'angular/controller-as-route': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-vm.md
        'angular/controller-as-vm': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as.md
        'angular/controller-as': 'warn',

        // DEPRECATED
        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/deferred.md
        // 'deferred': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di-unused.md
        'angular/di-unused': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-restrict.md
        'angular/directive-restrict': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/empty-controller.md
        'angular/empty-controller': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-controller.md
        'angular/no-controller': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-inline-template.md
        'angular/no-inline-template': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-run-logic.md
        'angular/no-run-logic': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-services.md
        'angular/no-services': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/on-watch.md
        'angular/on-watch': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/prefer-component.md
        'angular/prefer-component': 'warn',

        /**
         * +++++++++++++++++++++++++++++++
         * + Deprecated Angular Features +
         * +++++++++++++++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-cookiestore.md
        'angular/no-cookiestore': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-directive-replace.md
        'angular/no-directive-replace': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-http-callback.md
        'angular/no-http-callback': 'error',

        /**
         * ++++++++++
         * + Naming +
         * ++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/component-name.md
        'angular/component-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/constant-name.md
        'angular/constant-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-name.md
        'angular/controller-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-name.md
        'angular/directive-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/factory-name.md
        'angular/factory-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/file-name.md
        'angular/file-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/filter-name.md
        'angular/filter-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-name.md
        'angular/module-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/provider-name.md
        'angular/provider-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/service-name.md
        'angular/service-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/value-name.md
        'angular/value-name': 'off',

        /**
         * +++++++++++++++
         * + Conventions +
         * +++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di-order.md
        'angular/di-order': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di.md
        'di': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/dumb-inject.md
        'angular/dumb-inject': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/function-type.md
        'angular/function-type': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-dependency-order.md
        'angular/module-dependency-order': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-service-method.md
        'angular/no-service-method': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/one-dependency-per-line.md
        'angular/one-dependency-per-line': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/rest-service.md
        'angular/rest-service': ['error', '$http'],

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/watchers-execution.md
        'angular/watchers-execution': ['error', '$apply'],

        /**
         * ++++++++++++++++++++
         * + Angular Wrappers +
         * ++++++++++++++++++++
         */

        // DEPRECATED
        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/angularelement.md
        // 'angularelement': 'warn',

        // DEPRECATED
        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/definedundefined.md
        // 'definedundefined': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/document-service.md
        'angular/document-service': 'error',

        // DEPRECATED
        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/foreach.md
        // 'foreach': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/interval-service.md
        'angular/interval-service': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/json-functions.md
        'angular/json-functions': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/log.md
        'log': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-angular-mock.md
        'angular/no-angular-mock': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-jquery-angularelement.md
        'angular/no-jquery-angularelement': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/timeout-service.md
        'angular/timeout-service': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-array.md
        'angular/typecheck-array': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-date.md
        'angular/typecheck-date': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-function.md
        'angular/typecheck-function': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-number.md
        'angular/typecheck-number': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-object.md
        'angular/typecheck-object': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-string.md
        'angular/typecheck-string': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/window-service.md
        'angular/window-service': 'warn',

        /**
         * +++++++++++++++
         * + Misspelling +
         * +++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/on-destroy.md
        'angular/on-destroy': 'error'
    }
};
