'use strict';

const gcd = (solution, n) => {
    while (n !== 0) { 
        [solution, n] = [n, solution % n]; //solution = n , n = solution % n
    }
    return Math.abs(solution);
};

const euclid = (...inputNumbers) => {
    if (!inputNumbers.every(n => Number.isInteger(n))) {
        throw new TypeError('Все аргументы должны быть целыми числами'); // Обработка некорректного ввода
    }
    if (inputNumbers.length === 1) return inputNumbers[0]; // Если введено одно число, то его НОД это оно само и есть!
    return inputNumbers.reduce((acc, n) => gcd(acc, n));
}; 