'use strict';

const a = 42;

module.exports.correct = function () {
	const _a = 42;
	return _a + a;
};

module.exports.incorrect = function () {
	const a = 42;
	const Promise = a;
	return a + Promise;
};
