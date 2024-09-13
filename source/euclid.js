'use strict';

/**
 * Вычисление НОД нескольких натуральных чисел
 * @param {number} numbers - натуральные числа
 * @returns {number} - НОД натуральных чисел из numbers
 */
const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw new Error("empty data");
    }
    return numbers.reduce(
        (a, b) => {
            if (!Number.isInteger(a.valueOf()) || a.valueOf() < 0) {
                throw new Error('not a natural number');
            }

            return b === 0 ? a : euclid(b, a % b);
        }
    )
}


