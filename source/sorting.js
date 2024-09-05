"use strict";

const sorting = (arr, props) => {
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
