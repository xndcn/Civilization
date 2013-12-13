define(function () {
	var isNull = function (obj) {
		if (obj === undefined) return true;
		if (typeof obj === 'undefined') return true;
		if (obj === null) return true;
		return false;
	}

	var random = function random (min, max) {
		if (isNull(min)) return Math.random();
		if (min === true) return Math.random() > 0.5 ? true : false;
		if (isNull(max)) return Math.random() * min;
		if (max === true) return Math.random() < min ? true : false;
		return min + (max - min) * Math.random();
	}
	
	return {
		isNull: isNull,
		random: random
	};
});
