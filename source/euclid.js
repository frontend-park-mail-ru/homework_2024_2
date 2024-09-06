"use strict";

/**
 * Вычисляет наибольший общий делитель (НОД) двух чисел с помощью алгоритма Евклида.
 * @param {number} a Первое число.
 * @param {number} b Второе число.
 * @returns {number} НОД чисел a и b.
 */
function findNOD(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

/**
 * Вычисляет НОД нескольких чисел с помощью алгоритма Евклида.
 * @param {...number} числа Массив чисел.
 * @returns {number} НОД всех чисел в массиве.
 */
let euclid = (...numbers) => {
  if (!numbers.length) {
    throw new Error('No arguments provided');
  }

  if (!numbers.every(Number.isInteger)) {
    throw new Error('euclid() function does not accept non-numeric values')
  }
  return numbers.reduce((a, b) => findNOD(a, b), numbers[0]);
}