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
 * @param {string}
 * @param {number}
 * @throws {TypeError}
 * @returns string
 * @returns number
 */
function roman(inputNumber) {
  if (typeof inputNumber === 'number' && inputNumber.toString().length < 5 && inputNumber.toString().length > 0 && inputNumber != 0) {
    return decimalToRoman(inputNumber);
  }

  if (/^[1-9]\d{0,3}$/.test(inputNumber)) {
    return decimalToRoman(Number(inputNumber))
  }

  if (/^[MDCLXVI]+$/.test(inputNumber) || /^[mdclxvi]+$/.test(inputNumber)) {
    return romanToDecimal(inputNumber);
  }

  if (/^[MDCLXVImdclxvi]+$/.test(inputNumber)) {
    throw new Error("Bad roman number format");
  }

  if (/^[\000-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f\u0410-\u042F\u0430-\u044F\u0401\u0451]/.test(inputNumber)) {
    throw new Error("Bad symbol in number");
  }

  if ((typeof inputNumber === 'number' && inputNumber === 0) || (inputNumber === '0')) {
    throw new Error("Nil value")
  }

  if (String(inputNumber).length < 1 || String(inputNumber).length > 4) {
    throw new Error("Too short or too long decimal number")
  }
}

/**
 * Converts decimal number to roman number
 * @param {string}
 * @throws {TypeError}
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
 * @param {number}
 * @returns string
 */
const decimalToRoman = (inputNumber) => {
  let result = "";
  for (let [key, value] of Object.entries(DIGITS)) {
    while (inputNumber >= value) {
      result += key;
      inputNumber -= value;
    }
  }
  return result;
}
