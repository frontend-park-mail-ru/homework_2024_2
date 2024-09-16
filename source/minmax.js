'use strict';

/**
 * Находит минимальное и максимальное числа в наборе чисел.
 * @param {...number} numbers
 * @returns {[number,number]|[undefined,undefined]}
 */
const arrMinmax = function (...numbers) {
	return numbers.reduce(
		([minimum, maximum], current) => [
			minimum < current ? minimum : current,
			maximum > current ? maximum : current,
		], [undefined, undefined]
	);
};

/**
 * Находит минимальное и максимальное числа в строке.
 * @param {string} text
 * @returns {[number,number]|[undefined,undefined]}
 * @throws {TypeError} Если аргумент не является строкой.
 */
const minmax = function (text) {
	if (typeof text !== 'string' && !(text instanceof String)) {
		throw new TypeError('Функция принимает на вход только string');
	}
	const numbers = text
		.split(/ +/)
		.map(Number.parseFloat)
		.filter(entry => !isNaN(entry));
	return arrMinmax(...numbers);
};
