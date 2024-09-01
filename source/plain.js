"use strict";

/** Принимает на вход массив массивов и создаёт из них один общий массив. Массивы могут быть любой вложенности
 * @param {any[]} array
 */
const plain = (array) => {
  // Проверка на то, является ли аргумент массивом
  if (!Array.isArray(array)) throw new Error("Argument should be an array");
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
