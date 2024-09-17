'use strict';

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
 * Фукнция, которая переводит число из римской системы счисления в десятичную и наоборот
 * @param {string} inputNumber - строка для перевода либо из римской системы счисления в десятичную, либо наоборот
 * @param {number} inputNumber - число для перевода из десятичной системы счисления в римскую
 * @throws {TypeError} ошибки связанные с обработкой входного значения
 * @returns string при переводе из числа из десятичной системы в римскую
 * @returns number при переводе из числа из римской системы в десятичную
 */
const roman = (inputNumber) => {
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
};

/**
 * Переводит число из римской системы в десятичную
 * @param {string} исходная строка для перевода числа из римской системы в десятичную
 * @throws {TypeError} если в записи римского числа были допущены ошибки
 * @returns number результат перевода из римской системы в десятичную
 */
const romanToDecimal = (inputNumber) => {
  const bufferNumber = inputNumber.toUpperCase();

  const result = bufferNumber.split("").reduce((acc, _, i, arr) => {
    const current = DIGITS[arr.at(i)];
    const next = DIGITS[arr.at(i + 1)] || 0;
    const afterNext = DIGITS[arr.at(i + 2)] || 0;

    // Проверка на некорректный формат римского числа
    if (next && afterNext && current <= next && next < afterNext) {
      throw new Error("Bad roman number format");
    }

    // Добавляем или вычитаем значение текущего символа
    return acc + (next > current ? -current : current);
  }, 0);

  return result;
};

/**
 * Переводит число из десятичной системы в римскую
 * @param {number} исходная строка для перевода числа из десятичной системы в римскую
 * @returns string - результат перевода
 */
const decimalToRoman = (inputNumber) => {
  const result = Object.entries(DIGITS).reduce((acc, [key, value]) => {
    while (inputNumber >= value) {
      acc += key;
      inputNumber -= value;
    }
    return acc;
  }, "");

  return result;
};
