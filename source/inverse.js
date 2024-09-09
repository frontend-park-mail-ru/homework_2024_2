'use strict';

const inverse = function (array, start = 0) {
  if (array.length <= 1)
    return array

  var begin = Math.max(0, start)
  var length = array.length - Math.abs(start)

  var inverseArray = [...array]
  inverseArray.splice(begin, length, ...inverseArray.slice(begin, begin + length).reverse())
  return inverseArray
};