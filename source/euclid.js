'use strict';

const gcd = (solution, n) => {
    while (n) {
        const temp = solution;
        solution = n;
        n = temp % n;
    }
    return Math.abs(solution);
};

const euclid = (...inputNumbers) => {

    inputNumbers = inputNumbers.flat(Infinity); //если массив содержит другие массивы в качестве своих элементов, то метод flat() позволяет уменьшить вложенность, вплоть до полного превращения массива в плоский
    if (!inputNumbers.length) {
        throw new Error('Необходимо передать хотя бы одно число');
    }
    inputNumbers = inputNumbers.map(n => Number(n)); // преобразовывет элементы в числа

    if (!inputNumbers.every(n => Number.isInteger(n))) {
        throw new TypeError('Все аргументы должны быть целыми числами');
    }

    if (inputNumbers.length === 1) return inputNumbers[0];

    return inputNumbers.reduce((acc, n) => gcd(acc, n));
};