'use strict';

/**
 * Находит минимальное и максимальное числа в наборе чисел.
 * @param {...number} numbers
 * @returns {[number,number]|[undefined,undefined]}
 */
const arrMinmax = function (...numbers) {
	if (!numbers.length) {
		return [undefined, undefined];
	}
	return [
		numbers.reduce((a, b) => (a < b ? a : b)),
		numbers.reduce((a, b) => (a > b ? a : b))
	];
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
