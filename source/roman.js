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
 * Фукнция, которая анализирует переданное значение, и в зависимости от этого вызывает функцию,
 * которая переводит число из римской системы счисления в десятичную и наоборот
 * @param {string} inputNumber - строка для перевода либо из римской системы счисления в десятичную, либо наоборот
 * @param {number} inputNumber - число для перевода из десятичной системы счисления в римскую
 * @throws {TypeError} ошибки связанные с обработкой входного значения
 * @returns string при переводе из числа из десятичной системы в римскую
 * @returns number при переводе из числа из римской системы в десятичную
 */
function roman(inputNumber) {
  if (
    typeof inputNumber === "number" &&
    inputNumber.toString().length < 5 &&
    inputNumber.toString().length > 0 &&
    inputNumber != 0
  ) {
    return decimalToRoman(inputNumber);
  }

  if (/^[1-9]\d{0,3}$/.test(inputNumber)) {
    return decimalToRoman(Number(inputNumber));
  }

  if (/^[MDCLXVI]+$/.test(inputNumber) || /^[mdclxvi]+$/.test(inputNumber)) {
    return romanToDecimal(inputNumber);
  }

  if (/^[MDCLXVImdclxvi]+$/.test(inputNumber)) {
    throw new Error("Bad roman number format");
  }

  if (
    (typeof inputNumber === "number" && inputNumber === 0) ||
    inputNumber === "0"
  ) {
    throw new Error("Nil value");
  }

  if (String(inputNumber).length < 1 || String(inputNumber).length > 4) {
    throw new Error("Too short or too long decimal number");
  }

  throw new Error("Bad symbol in number");
}

/**
 * Переводит число из римской системы в десятичную
 * @param {string} исходная строка для перевода числа из римской системы в десятичную
 * @throws {TypeError} если в записи римского числа были допущены ошибки
 * @returns number результат перевода из римской системы в десятичную
 */
const romanToDecimal = (inputNumber) => {
  let bufferNumber = inputNumber.toUpperCase();
  let result = 0;

  for (let i = 0; i < bufferNumber.length; i++) {
    if (
      DIGITS[bufferNumber.at(i + 1)] &&
      DIGITS[bufferNumber.at(i + 2)] &&
      DIGITS[bufferNumber.at(i)] <= DIGITS[bufferNumber.at(i + 1)] &&
      DIGITS[bufferNumber.at(i + 1)] < DIGITS[bufferNumber.at(i + 2)]
    ) {
      throw new Error("Bad roman number format");
    }

    result +=
      DIGITS[bufferNumber.at(i + 1)] > DIGITS[bufferNumber.at(i)]
        ? -DIGITS[bufferNumber.at(i)]
        : DIGITS[bufferNumber.at(i)];
  }

  return result;
};

/**
 * Переводит число из десятичной системы в римскую
 * @param {number} исходная строка для перевода числа из десятичной системы в римскую
 * @returns string - результат перевода
 */
const decimalToRoman = (inputNumber) => {
  let result = "";
  Object.entries(DIGITS).forEach(([key, value]) => {
    while (inputNumber >= value) {
      result += key;
      inputNumber -= value;
    }
  });
  return result;
};
