'use strict';

const inverse = function (array, start = 0) {
  if (!Number.isInteger(start) || array.length <= 1 || array.length <= Math.abs(start))
    return array

  var begin = Math.max(0, start)
  var length = array.length - Math.abs(start)

  var inverseArray = [...array]
  inverseArray.splice(begin, length, ...inverseArray.slice(begin, begin + length).reverse())
  return inverseArray
};