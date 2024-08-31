"use strict";
// Георгий Ашуров, WEB-21

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

function euclid(...arr) {
  if (!arr.every(Number.isFinite)) {
    throw new Error("Все элементы массива должны быть числами");
  }

  if (arr.length === 1) return arr[0];

  return Math.abs(arr.reduce((res, num) => gcd(res, num), 0));
}
