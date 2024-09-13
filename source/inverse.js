'use strict';

const inverse = (array, start = 0) => {
  if (!Number.isInteger(start)) {
    throw new TypeError('Argument must be an integer number.');
  }

  if (array.length <= 1 || array.length <= Math.abs(start)) {
    return array;
  }

  const begin = Math.max(0, start);
  const length = array.length - Math.abs(start);
  
  return array.toSpliced(begin, length, ...array.slice(begin, begin + length).reverse());
};
