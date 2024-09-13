'use strict';

/**
 * Вычисление НОД нескольких натуральных чисел
 * @param {number} numbers - натуральные числа
 * @returns {number} - НОД натуральных чисел из numbers
 * @throws {TypeError} - если данные содержат не целые числа или вовсе пусты
 * @throws {RangeError} - если целое число не натуральное
 */
const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw new TypeError("empty data");
    }
    return numbers.reduce(
        (a, b) => {
            if (!Number.isInteger(a.valueOf())) {
                throw new TypeError('not a number');
            }
            if (a.valueOf() < 0) {
                throw new RangeError('not a natural number');
            }

            return b === 0 ? a : euclid(b, a % b);
        }
    )
}


