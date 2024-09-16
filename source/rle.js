'use strict'

/**
 * Функция для сжатия строки с использованием алгоритма Run-Length Encoding (RLE).
 * Если строка содержит последовательные одинаковые символы, они заменяются одним символом
 * и количеством повторений.
 *
 * @param {string} str - Входная строка для сжатия.
 *
 * @returns {string} - Сжатая строка.
 *
 * @throws {Error} - Если входная строка пуста.
 *
 */

const rle = (str) => {
    if (typeof str !== 'string' && !(str instanceof String) || !str) {
        throw new TypeError('Входной параметр должен быть непустой строкой');
    }
    return str.split('').reduce((acc, curr, index, array) => {
        if (curr === array[index + 1]) {
            acc.cnt++;
        } else {
            acc.res.push(curr + (acc.cnt > 1 ? acc.cnt : ''));
            acc.cnt = 1;
        }
        return acc;
    }, { res: [], cnt: 1 }).res.join('');
};

