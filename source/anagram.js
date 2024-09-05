'use strict';

/**
 * Функция, которая принимает на вход массив строк и группирует его на группы слов-анаграм
 * @param {string[]} words - Массив строк.
 * @returns {string[][]} Отсортированные группы слов-анаграм.
 */
const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError('Argument must be an array');
    }
    if (words.some(word => !isString(word) || word === '' || [...word].some(symbol => Number.isNaN(symbol)))) {
        throw new Error('Array must only contain words');
    }

    const arrayMap = {};

    words.forEach((word) => {
        const letters = word.split('').sort((a, b) => a.localeCompare(b));
        if (!(letters in arrayMap)) {
            arrayMap[letters] = [];
        }

        arrayMap[letters].push(word);
    });

    return Object.values(arrayMap).filter(value => value.length > 1).map(value =>
        value.sort((a, b) => a.localeCompare(b))).sort();
}

/**
 * Функция, которая принимает на вход объект и проверяет является ли он строкой
 * @param {any} string - Объект.
 * @returns {boolean} Является ли объект строкой.
 */
const isString = string => {
    return (typeof string === 'string' || string instanceof String)
}
