"use strict";
// Георгий Ашуров, WEB-21

/**
 * Вычисляет НОД двух чисел
 * @param {number} a Первое число
 * @param {number} b Второе число
 * @returns {number} НОД a и b
 * @example
 * // вернет 4
 * gcd(4, 8)
 * @returns {Number} Вернет НОД для 4 и 8
*/
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

/**
 * Вычисляет НОД натуральных чисел для любого количества аргументов
 * @param {...number} arr Массив чисел
 * @returns {number} НОД всех чисел в массиве
 * @throws {TypeError} Если хотя бы одно число в массиве не является числом
 * @example
 * // вернет 3
 * euclid(12, 15, 21)
 * @returns {Number} Вернет НОД для 12, 15, 21
 */
const euclid = (...arr) => {
  if (!arr.every(el => Number.isFinite(el))) {
    throw new TypeError('Все элементы массива должны быть числами');
  }

  return Math.abs(arr.reduce((res, num) => gcd(res, num), 0));
}
