'use strict';

/**
 * Рекурсивно "раскрывает" вложенные массивы в одномерный массив.
 *
 * @param {Array} arr - Массив, который может содержать вложенные массивы.
 * @returns {Array} Однажды вложенный массив.
 * @throws {TypeError} Если входное значение не является массивом.
 */
const plain = arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Argument must be an array');
    }
    return arr.reduce((acc, v) => acc.concat(Array.isArray(v) ? plain(v) : v), []);
};