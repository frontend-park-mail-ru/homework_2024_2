'use strict';

/**
 * Функция для нахождения наибольшего общего делителя (НОД) двух чисел с помощью алгоритма Евклида.
 * @param {number} solution Первый параметр функции, далее в данную переменную записывается текущий результат.
 * @param {number} n Второй параметр функции.
 * @returns {number} Наибольший общий делитель двух чисел.
 */
const gcd = (solution, n) => {
    while (n) {
        const temp = solution;
        solution = n;
        n = temp % n;
    }
    return Math.abs(solution);
};


/**
 * Функция для нахождения НОД нескольких чисел с помощью алгоритма Евклида.
 * @param {...number} inputNumbers Введенные числа, для которых нужно найти НОД.
 * @throws {Error} Если передан пустой массив.
 * @throws {TypeError} Если среди аргументов есть нецелые числа.
 * @returns {number} Возвращает НОД для всех переданных в функцию целых чисел.
 */
const euclid = (...inputNumbers) => {

    inputNumbers = inputNumbers.flat(Infinity); //если массив содержит другие массивы в качестве своих элементов, то метод flat() позволяет уменьшить вложенность, вплоть до полного превращения массива в плоский
    if (!inputNumbers.length) {
        throw new Error('Необходимо передать хотя бы одно число');
    }
    inputNumbers = inputNumbers.map(n => Number(n)); // преобразовывет элементы в числа

    if (!inputNumbers.every(n => Number.isInteger(n))) {
        throw new TypeError('Все аргументы должны быть целыми числами');
    }

    if (inputNumbers.length === 1) {
        return inputNumbers[0];
    }

    return inputNumbers.reduce((acc, n) => gcd(acc, n));
};
