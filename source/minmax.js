"use strict";


/**
 * Находит минимальное и максимальное значения в строке чисел.
 *
 * @param {string} numbers - Строка, содержащая числа, разделенные пробелами.
 * @returns {Array} Массив, содержащий минимальное и максимальное значения в строке.
 * В случае, если строка не содержит чисел, возвращает [undefined, undefined].
 * @throws {TypeError} Если аргумент не является строкой.
 */

const minmax = function (numbers) {
  if (!(typeof numbers === "string" || (typeof numbers === "object" && numbers instanceof String))) {
    throw new TypeError("Аргумент должен быть строкой");
  }

  const numbersArray = [];

  numbers.split(" ").forEach(value =>{
    const num = parseFloat(value);

    if (!Number.isNaN(num)) {
      numbersArray.push(num);
    }
  });

  if (!numbersArray) {
    return [ undefined, undefined ];
  }

  return [ findMin(...numbersArray), findMax(...numbersArray) ];
};

/**
 * Находит максимальное значение среди переданных чисел.
 *
 * @param {...number} numbers - Перечисление чисел, среди которых нужно найти максимальное.
 * @returns {number|undefined} Максимальное значение или undefined, если аргумент пустой.
 */
const findMax = function (...numbers) {
  if (!numbers) {
    return undefined;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
};

/**
 * Находит минимальное значение среди переданных чисел.
 *
 * @param {...number} numbers - Перечисление чисел, среди которых нужно найти минимальное.
 * @returns {number|undefined} Минимальное значение или undefined, если аргумент пустой.
 */
const findMin = function (...numbers) {
  if (!numbers) {
    return undefined;
  }

  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
};
