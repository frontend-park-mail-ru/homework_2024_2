"use strict";

const sorting = (arr, props) => {
  if (arr.length <= 1) {
    return arr;
  }

  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      let flag = false;

      for (let key of props) {
        if (sortedArr[j][key] > sortedArr[j + 1][key]) {
          flag = true;
          break;
        } else if (sortedArr[j][key] < sortedArr[j + 1][key]) {
          break;
        }
      }

      if (flag) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }

  return sortedArr;
};
