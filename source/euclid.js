'use strict';

/**
 * Вычисляет наибольший общий делитель (НОД) двух чисел с помощью алгоритма Евклида.
 * @param {number} a Первое число.
 * @param {number} b Второе число.
 * @returns {number} НОД чисел a и b.
 */
const findNOD = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB !== 0) {
    [tempA, tempB] = [tempB, tempA % tempB];
  }
  return tempA;
}

/**
 * Вычисляет НОД нескольких чисел с помощью алгоритма Евклида.
 * @param {...number} Массив чисел.
 * @returns {number} НОД всех чисел в массиве.
 * @throws {RangeError} Если не переданы аргументы.
 * @throws {TypeError} Если переданы нечисловые значения.
 */
const euclid = (...numbers) => {
  if (!numbers.length) {
    throw new RangeError('No arguments provided');
  }
  
  if (!numbers.every(Number.isInteger)) {
    throw new TypeError('euclid() function does not accept non-numeric values')
  }
  
  return numbers.reduce((a, b) => findNOD(a, b), numbers[0]);
}
