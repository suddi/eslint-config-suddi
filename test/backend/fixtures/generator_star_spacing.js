'use strict';

module.exports.correct = function* (a) {
    yield a();
};

module.exports.incorrect = function *(a) {
    yield a();
};
