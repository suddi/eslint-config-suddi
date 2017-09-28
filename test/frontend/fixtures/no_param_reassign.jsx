'use strict';

module.exports.correct = function (a, b) {
    let newA = a;
    newA = 42;
    // This is actually fooling eslint, since newB is still a reference to b
    const newB = b;
    newB.a = 42;
    return [newA, newB];
};

module.exports.incorrect = function (a, b) {
    a = 42;
    b.a = 42;
    return [a, b];
};
