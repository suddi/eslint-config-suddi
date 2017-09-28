'use strict';

module.exports.correct = function () {
	let a;
	a = 5;
	a++;
	return a;
};

module.exports.incorrect = function () {
let a;
		a = 5;
			a++;
				return a;
};
