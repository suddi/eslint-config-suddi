'use strict';

const EventEmitter = require('events');
const eventEmitter = require('events');

module.exports.correct = function () {
    const a = new EventEmitter();
    return a;
};

module.exports.incorrect = function () {
    const a = new eventEmitter();
    return a;
};
