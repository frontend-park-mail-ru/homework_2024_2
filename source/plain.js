"use strict";

/** Принимает на вход массив массивов и создаёт из них один общий массив. Массивы могут быть любой вложенности
 * @param {any[]} array
 */
const plain = function (array) {
  // Проверка на то, является ли аргумент массивом
  if (!Array.isArray(array)) throw new Error("Argument should be an array");
  // Проверка на то, что передан только один аргумент
  if (arguments.length == 0 || arguments.length > 1)
    throw new Error(
      `Function should get one argument, got ${arguments.length}`
    );
  // Рекурсивно выпрямляем массив
  const ret = new Array();
  for (const elem of array) {
    if (Array.isArray(elem)) {
      const plainElem = plain(elem);
      for (const el of plainElem) ret.push(el);
    } else {
      ret.push(elem);
    }
  }
  return ret;
};
