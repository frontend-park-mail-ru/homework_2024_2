'use strict';


/**
 * Reverses the order of the elements in the array, starting from the specified index.
 *
 * @param {Array} array - The array to inverse.
 * @param {Integer} [start=0] - The index of the beginning of the inversion. If it is negative, the inversion will start from the end of the array.
 * @returns {Array} - A new array with an inverted part.
 * @throws {TypeError} - If the first argument is not an array or if the second argument is not an integer.
 */
const inverse = (array, start = 0) => {
  if (!Array.isArray(array)) {
    throw new TypeError('The first argument must be an array.');
  }

  if (!Number.isInteger(start)) {
    throw new TypeError('The second argument must be an integer number.');
  }

  if (array.length <= 1 || array.length <= Math.abs(start)) {
    return array;
  }

  const begin = Math.max(0, start);
  const length = array.length - Math.abs(start);
  
  return array.toSpliced(begin, length, ...array.slice(begin, begin + length).reverse());
};
