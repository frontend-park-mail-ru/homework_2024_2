'use strict';

/**
 * Находит минимальное и максимальное числа в наборе чисел.
 * @param {...number} numbers
 * @returns {[number,number]|[undefined,undefined]}
 */
const arrMinmax = function (...numbers) {
	if (!numbers.length) return [undefined, undefined];
	let minimum = numbers[0];
	let maximum = numbers[0];
	numbers.forEach((number) => {
		if (number < minimum) minimum = number;
		if (number > maximum) maximum = number;
	});
	return [minimum, maximum];
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
