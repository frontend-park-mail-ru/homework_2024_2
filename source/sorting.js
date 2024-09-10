"use strict";

/**
 * Принимает на вход массив plain-объектов и массив свойств, по которым необходимо отсортировать массив объектов. Реализует устойчивую сортировку этого массива в порядке возрастания.
 *
 * @param {object[]} arr массив plain-объектов
 * @param {string[]} props массив свойств, по которым необходимо отсортировать массив
 * @returns {object[]} Отсортированный массив
 * @throws {TypeError} Выдаст ошибку, если один из аргументов не передан
 * @throws {TypeError} Выдаст ошибку, если arr это не массив
 * @throws {TypeError} Выдаст ошибку, если props это не массив
 * @throws {TypeError} Выдаст ошибку, если хотя бы один элемент arr не является объектом
 * @throws {Error} Выдаст ошибку, если хотя бы один объект не содержит свойство, по которому arr сортируется
 */

const sorting = (arr, props) => {
  if (!arr || !props) {
    throw new TypeError("Either arr or props is undefined");
  }

  if (!Array.isArray(arr)) {
    throw new TypeError("arr should be array");
  }

  if (!Array.isArray(props)) {
    throw new TypeError("props should be array");
  }

  arr.forEach((elem) => {
    if (typeof elem !== "object" || elem === null) {
      throw new TypeError(
        `arr should contain objects only, not ${typeof elem}`
      );
    }

    props.forEach((prop) => {
      if (elem[prop] === undefined) {
        throw new Error(
          `At least one plain object in arr doesn't contain orderby prop ${prop}`
        );
      }
    });
  });

  if (arr.length <= 1) {
    return arr;
  }

  const sortedArr = [...arr];

  sortedArr.forEach((_, i) => {
    let swapped = false;

    sortedArr.forEach((_, j) => {
      if (j < sortedArr.length - 1 - i) {
        let flag = false;

        for (let prop of props) {
          if (sortedArr[j][prop] > sortedArr[j + 1][prop]) {
            flag = true;
            break;
          } else if (sortedArr[j][prop] < sortedArr[j + 1][prop]) {
            break;
          }
        }

        if (flag) {
          [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
          swapped = true;
        }
      }
    });

    if (!swapped) {
      return sortedArr;
    }
  });

  return sortedArr;
};
