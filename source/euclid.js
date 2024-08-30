"use strict";
// Георгий Ашуров, WEB-21

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function euclid(...arr) {
  if (arr.length === 1) return arr[0];
  return Math.abs(arr.reduce((res, num) => gcd(res, num), 0));
}
