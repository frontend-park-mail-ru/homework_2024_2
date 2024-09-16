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
 * @param {string} num  - Done value if number is roman
 * @param {number} num - Done value if number is decimal
 * @throws {TypeError} If number format not decimal or roman or number too long
 * @returns string from decimalToRoman
 * @returns number from romanToDecimal
 */
function roman(inputNumber) {
  if (/^[1-9]\d{0,3}$/.test(inputNumber)) {
    return decimalToRoman(inputNumber);
  }

  if (/^[MDCLXVI]+$/.test(inputNumber) || /^[mdclxvi]+$/.test(inputNumber)) {
    return romanToDecimal(inputNumber);
  }

  throw new Error("Bad data type");
}

/**
 * Converts decimal number to roman number
 * @param {string} num  - Done value in roman format
 * @throws {TypeError} If roman number has incorrect format
 * @returns number
 */
const romanToDecimal = (inputNumber) => {
  let bufferNumber = inputNumber.toUpperCase();
  let result = 0;

  for (let i = 0; i < bufferNumber.length; i++) {
    const firstNum = DIGITS[bufferNumber[i]];
    const secNum = DIGITS[bufferNumber[i + 1]] || 0;
    const thirdNum = DIGITS[bufferNumber[i + 2]] || 0;

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
const decimalToRoman = (inputNumber) => {
  let result = "";
  for (let symb in DIGITS) {
    while (inputNumber >= DIGITS[symb]) {
      result += symb;
      inputNumber -= DIGITS[symb];
    }
  }
  return result;
}
