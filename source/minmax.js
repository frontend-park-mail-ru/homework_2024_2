'use strict';

/**
 * Находит минимальное и максимальное числа в строке.
 * @param {string} text
 * @returns {[number,number]|[undefined,undefined]}
 * @throws {TypeError} Если входная строка не является строкой.
 */
const minmax = function (text) {
    if (typeof text !== 'string') {
        throw new TypeError('Функция принимает на вход только тип string')
    }
    const numbers = text
        .split(/ +/)
        .map(Number.parseFloat)
        .filter(entry => !Number.isNaN(entry));
    if (numbers.length === 0) return [undefined, undefined];
    return [Math.min(...numbers), Math.max(...numbers)];
};