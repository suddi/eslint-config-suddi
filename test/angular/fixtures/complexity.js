'use strict';

module.exports.correct = function () {
	const a = {
		a: 1,
		b: 2,
		c: 3,
		d: 4
	};
	return {
		a: a.a || 1,
		b: a.b || 2,
		c: a.c || 3,
		d: a.d || 4
	};
};

module.exports.incorrect = function () {
	const a = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
		e: 5
	};
	return {
		a: a.a || 1,
		b: a.b || 2,
		c: a.c || 3,
		d: a.d || 4,
		e: a.e || 5
	};
};
