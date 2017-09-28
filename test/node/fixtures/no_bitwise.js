'use strict';

module.exports.correct = function (a) {
    return a * 2;
};

module.exports.incorrect = function (a) {
    return a << 1;
};
