"use strict";

const sorting = (arr, props) =>
  arr.sort((a, b) => {
    for (let prop of props) {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
    }
    return 0;
  });
