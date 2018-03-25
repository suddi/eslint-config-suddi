'use strict';

module.exports.correct = function () {
    const a = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9
    };
    return {
        a: a.a || 1,
        b: a.b || 2,
        c: a.c || 3,
        d: a.d || 4,
        e: a.e || 5,
        f: a.f || 6,
        g: a.g || 7,
        h: a.h || 8,
        i: a.i || 9
    };
};

module.exports.incorrect = function () {
    const a = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10
    };
    return {
        a: a.a || 1,
        b: a.b || 2,
        c: a.c || 3,
        d: a.d || 4,
        e: a.e || 5,
        f: a.f || 6,
        g: a.g || 7,
        h: a.h || 8,
        i: a.i || 9,
        j: a.j || 10
    };
};
