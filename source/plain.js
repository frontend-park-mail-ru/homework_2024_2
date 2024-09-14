'use strict'; 

/** Принимает на вход массив массивов любой вложенности и создает из них один общий массив.
 * @param {object[]} arrays Массив массивов
 * @example
 * const array = [1, [null, [3]], ['четыре']]
 * const joint_array = plain(array)
 * console.log(joint_array); // Вывод: [1, null, 3, 'четыре']
 * @throws {TypeError} Если arrays это не массив
 * @returns {object[]} Объединенный массив
 */

const plain = arrays => arrays.reduce((arr, i) => Array.isArray(i) ? arr.concat(plain(i)) : arr.concat(i), []);