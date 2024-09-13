'use strict'; 

/** Принимает на вход массив массивов любой вложенности и создает из них один общий массив.
 * @param {object[]} arrrays Массив массивов
 * @throws {TypeError} Если arrays это не массив
 * @throws {TypeError} Если хотя бы один из элементов массива arrays не является массивом
 * @returns {object[]} Объединенный массив
 */

const plain = arrays => arrays.flat(Infinity);
