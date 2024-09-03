'use strict';

function roman(numberOrNumeral) {
    if (typeof numberOrNumeral === 'number' || typeof numberOrNumeral === 'string') {
        if (Number(numberOrNumeral) > 0 && numberOrNumeral % 1 === 0) {
            return arabicToRoman(numberOrNumeral);
        }
        if (typeof numberOrNumeral === 'string') {
            return romanToArabic(numberOrNumeral);
        }
    }
    throw new Error('Неверный тип данных');
}

function romanToArabic(romanNumeral) {
    const romanArabicMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    romanNumeral = romanNumeral.toUpperCase();
    if (!/^[IVXLCDM]+$/.test(romanNumeral)) {
        throw new Error('Неверный формат римского числа');
    }
    return [...romanNumeral].reduce(
        (result, currentSymbol, i, arrRomanNumeral) => {
            const nextSymbol = arrRomanNumeral[i + 1];
            return result + (romanArabicMap[currentSymbol] < romanArabicMap[nextSymbol] ?
                -romanArabicMap[currentSymbol] : romanArabicMap[currentSymbol]);
        }, 0);
}

function arabicToRoman(arabicNumber) {
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
    return Object.entries(arabicRomanMap).reduce(
        (result, [romanKey, arabicValue]) => {
            while (arabicNumber >= arabicValue) {
                result += romanKey;
                arabicNumber -= arabicValue;
            }
            return result;
        }, '');
}

