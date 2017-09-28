'use strict';

module.exports.correct = function () {
	// Commenting on this URL that does end but it does forever to finish, it will seem like it never does but at some point when you least expect it to, it will end and that point is coming up soon,plea
	const url = 'http://www.thisisgoingtobeonelongurlthatneverendsneverfinishesbutwhenitdoesyouwillbesuprisedbecauseithasfinishedextendingbeyond200charactersthatsunbelievalbleyouwillsaybutitdoes.com';
	return url;
};

module.exports.incorrect = function (a) {
	// Commenting on this URL that does end but it does forever to finish, it will seem like it never does but at some point when you least expect it to, it will end and that point is coming up soon,pleas
	const url = 'http://www.thisisgoingtobeonelongurlthatneverendsneverfinishesbutwhenitdoesyouwillbesuprisedbecauseithasfinishedextendingbeyond200charactersthatsunbelievalbleyouwillsaybutitdoes.com.';
	return url;
};
