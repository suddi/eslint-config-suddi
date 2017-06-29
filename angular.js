'use strict';

const backendRules = require('./node-tab');

module.exports = {
    extends: 'xo',

    env: {
        browser: true,

        mocha: true
    },

    // https://github.com/Gillespie59/eslint-plugin-angular#rules
    rules: Object.assign({}, backendRules.rules, {
        /**
         * +++++++++++++++++++
         * + Possible Errors +
         * +++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/avoid-scope-typos.md
        'avoid-scope-typos': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-getter.md
        'module-getter': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-setter.md
        'module-setter': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-private-call.md
        'no-private-call': 'error',

        /**
         * ++++++++++++++++++
         * + Best Practices +
         * ++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/component-limit.md
        'component-limit': ['warn', 3],

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-route.md
        'controller-as-route': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as-vm.md
        'controller-as-vm': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-as.md
        'controller-as': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/deferred.md
        deferred: 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di-unused.md
        'di-unused': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-restrict.md
        'directive-restrict': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/empty-controller.md
        'empty-controller': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-controller.md
        'no-controller': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-inline-template.md
        'no-inline-template': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-run-logic.md
        'no-run-logic': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-services.md
        'no-services': 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/on-watch.md
        'on-watch': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/prefer-component.md
        'prefer-component': 'warn',

        /**
         * +++++++++++++++++++++++++++++++
         * + Deprecated Angular Features +
         * +++++++++++++++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-cookiestore.md
        'no-cookiestore': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-directive-replace.md
        'no-directive-replace': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-http-callback.md
        'no-http-callback': 'error',

        /**
         * ++++++++++
         * + Naming +
         * ++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/component-name.md
        'component-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/constant-name.md
        'constant-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/controller-name.md
        'controller-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/directive-name.md
        'directive-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/factory-name.md
        'factory-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/file-name.md
        'file-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/filter-name.md
        'filter-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-name.md
        'module-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/provider-name.md
        'provider-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/service-name.md
        'service-name': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/value-name.md
        'value-name': 'off',

        /**
         * +++++++++++++++
         * + Conventions +
         * +++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di-order.md
        'di-order': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/di.md
        di: 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/dumb-inject.md
        'dumb-inject': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/function-type.md
        'function-type': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/module-dependency-order.md
        'module-dependency-order': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-service-method.md
        'no-service-method': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/one-dependency-per-line.md
        'one-dependency-per-line': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/rest-service.md
        'rest-service': ['error', '$http'],

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/watchers-execution.md
        'watchers-execution': ['error', '$apply'],

        /**
         * ++++++++++++++++++++
         * + Angular Wrappers +
         * ++++++++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/angularelement.md
        angularelement: 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/definedundefined.md
        definedundefined: 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/document-service.md
        'document-service': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/foreach.md
        foreach: 'warn',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/interval-service.md
        'interval-service': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/json-functions.md
        'json-functions': 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/log.md
        log: 'off',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-angular-mock.md
        'no-angular-mock': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/no-jquery-angularelement.md
        'no-jquery-angularelement': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/timeout-service.md
        'timeout-service': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-array.md
        'typecheck-array': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-date.md
        'typecheck-date': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-function.md
        'typecheck-function': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-number.md
        'typecheck-number': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-object.md
        'typecheck-object': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/typecheck-string.md
        'typecheck-string': 'error',

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/window-service.md
        'window-service': 'warn',

        /**
         * +++++++++++++++
         * + Misspelling +
         * +++++++++++++++
         */

        // https://github.com/Gillespie59/eslint-plugin-angular/blob/master/docs/on-destroy.md
        'on-destroy': 'error'
    })
};
