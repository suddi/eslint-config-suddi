'use strict';

module.exports.correct = function () {
	const a = 42;
	return a;
};

module.exports.incorrect = function () {
	let a = 42;
	return a;
};
