'use strict';

module.exports.correct = function (a, error) {
	try {
		return a();
	} catch (err) {
		throw error;
	}
};

module.exports.incorrect = function (a, error) {
	try {
		return a();
	} catch (error) { /* eslint no-shadow: off */
		throw error;
	}
};
