'use strict';

const arabicRomanMap = {
	'M': 1000,
	'CM': 900,
	'D': 500,
	'CD': 400,
	'C': 100,
	'XC': 90,
	'L': 50,
	'XL': 40,
	'X': 10,
	'IX': 9,
	'V': 5,
	'IV': 4,
	'I': 1
};

const ROMAN_TYPE_TEST_REGEX = /^[ivxlcdm]+$/i;

/**
 * Converts Arabic number into Roman numeral and Roman numeral into Arabic number.
 *
 * @param {number|string} numberOrNumeral - Arabic number or Roman numeral
 * @return {string|number} - converted value as a Roman numeral or Arabic number
 * @throws {TypeError} Throws an error if the input data is of the wrong type or format.
 */
const roman = (numberOrNumeral) => {
	if (typeof numberOrNumeral === 'number' ||
		typeof numberOrNumeral === 'string' ||
		numberOrNumeral instanceof Number ||
		numberOrNumeral instanceof String) {
		if (Number.isInteger(+numberOrNumeral) && +numberOrNumeral > 0) {
			return arabicToRoman(+numberOrNumeral);
		}
		if (typeof numberOrNumeral === 'string' || numberOrNumeral instanceof String) {
			if (!ROMAN_TYPE_TEST_REGEX.test(numberOrNumeral)) {
				throw new TypeError('Неверный формат римского числа');
			}
			return romanToArabic(numberOrNumeral);
		}
	}
	throw new TypeError('Неверный тип данных');
}

/**
 * Converts Roman numeral into Arabic number.
 *
 * @param {string} romanNumeral - Roman numeral for convertion
 * @return {string|number} - converted Arabic number
 * @throws {TypeError} Throws an error if Roman numeral is of the wrong format.
 */
const romanToArabic = (romanNumeral) => {
	const upperCaseRomanNumeral = romanNumeral.toUpperCase();
	return [...upperCaseRomanNumeral].reduce((result, currentSymbol, i) => {
		const nextSymbol = upperCaseRomanNumeral[i + 1];
		if (arabicRomanMap[currentSymbol] < arabicRomanMap[nextSymbol]) {
			result -= arabicRomanMap[currentSymbol];
		} else {
			result += arabicRomanMap[currentSymbol];
		}
		return result;
	}, 0);
}

/**
 * Converts Roman numeral into Arabic number.
 *
 * @param {number} arabicNumber - Arabic number for convertion
 * @return {string|number} - converted Roman numeral
 */
const arabicToRoman = (arabicNumber) => {
	let copiedArabicNumber = arabicNumber;
	return Object.entries(arabicRomanMap).reduce(
		(result, [romanKey, arabicValue]) => {
			while (copiedArabicNumber >= arabicValue) {
				result += romanKey;
				copiedArabicNumber -= arabicValue;
			}
			return result;
		}, '');
}

