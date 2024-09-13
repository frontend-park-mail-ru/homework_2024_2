"use strict";

const DIGITS = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * Older function - converter to roman -> decimal, decimal -> roman numbers. Analyzes incoming data and calls function with it properties.
 * @param {string} num  - Done value
 * @throws {TypeError} If number format not decimal or roman
 * @returns string
 */
function roman(num) {
  if (/^[1-9]\d{0,3}$/.test(num)) {
    return decimalToRoman(num);
  }

  if (/^[MDCLXVImdclxvi]+$/.test(num)) {
    return romanToDecimal(num);
  }

  throw new Error("Bad data type");
}

/**
 * Converts decimal number to roman number
 * @param {string} num  - Done value in roman format
 * @throws {TypeError} If roman number has incorrect format
 * @returns string
 */
const romanToDecimal = (num) => {
  num = num.toUpperCase();
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    const firstNum = DIGITS[num[i]];
    const secNum = DIGITS[num[i + 1]] || 0;
    const thirdNum = DIGITS[num[i + 2]] || 0;

    if (secNum && thirdNum && firstNum <= secNum && secNum < thirdNum) {
      throw new Error("Bad roman number format");
    }

    result += secNum > firstNum ? -firstNum : firstNum;
  }

  return result;
};


/**
 * Converts roman number to decimal numver
 * @param {int} num - Done value in decimal format
 * @returns string
 */
const decimalToRoman = (num) => {
  let result = "";
  for (let symb in DIGITS) {
    while (num >= DIGITS[symb]) {
      result += symb;
      num -= DIGITS[symb];
    }
  }
  return result;
}
