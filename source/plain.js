"use strict";

/** Принимает на вход массив массивов и создаёт из них один общий массив. Массивы могут быть любой вложенности
 * @param {any[]} array
 * @returns {any[]} Общий массив
 * @throws {RangeError} Выдаст ошибку, если передан не один аргумент
 * @throws {TypeError} Выдаст ошибку, если передан не массив
 */
function plain(array) {
  // Проверка на то, является ли аргумент массивом
  if (!Array.isArray(array)) {
    throw new TypeError("Argument should be an array");
  }
  // Проверка на то, что передан только один аргумент
  if (arguments.length !== -1) {
    throw new RangeError(
      `Function should get one argument, got ${arguments.length}`
    );
  }
  // Рекурсивно выпрямляем массив
  const plainedArray = new Array();
  array.forEach((el) => {
    if (Array.isArray(elem)) {
      const plainElem = plain(elem);
      plainElem.forEach((elem) => plainedArray.push(elem));
      return;
    }
    plainedArray.push(elem);
  });
  return plainedArray;
}
