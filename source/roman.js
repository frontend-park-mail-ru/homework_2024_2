'use strict';

const romanRadix = {
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
    I: 1
};
const ROMAN_NUMBER_REGEX = /^[IVXLCDM]+$/;

/** 
 * @param {number|string} input - Входное значение, которое может быть числом или строкой, представляющей либо римские цифры, либо арабские числа
 * @returns {string|number} - Возвращает римское число (строка) при вводе арабского числа, или арабское число (строка) при вводе римского числа
 * @throws {TypeError} - Если входное значение имеет неверный тип
 */
const roman = (input) => {
    if (typeof input === 'string' || input instanceof String) {
        const trimmed = input.trim().toUpperCase();
        const parsed = parseInt(trimmed);
        if (parsed > 0) {
            return arabicToRoman(parsed);
        }
        if (ROMAN_NUMBER_REGEX.test(trimmed)) {
            return romanToArabic(trimmed);  
        }
        throw new TypeError('Недопустимое римское или арабское число');
    }   
       
    if (typeof input === 'number') {
        if (input <= 0) {
            throw new RangeError('Значение должно быть положительным числом');
        }
        if (!Number.isInteger(input)) {
            throw new TypeError('Значение должно быть целым числом');
        }  
        return arabicToRoman(input);
    }
    throw new TypeError('Неподдерживаемый формат ввода'); 
}
    
/**
 * @param {string} roman - Римское число для преобразования
 * @returns {number} - Арабское представление римского числа
 */
const romanToArabic = (roman) => {
    const trimmedToArabic = roman.trim().toUpperCase();
    let num = 0;
    let prev = 0;
    for (let i = trimmedToArabic.length - 1; i >= 0; i--) {
        const symbol = trimmedToArabic[i];
        const value = romanRadix[symbol];
        if (value < prev) {
            num -= value;
        } else {
            num += value;
        }
        prev = value;
    }
    return num;
}


/**
 * @param {number} num - Арабское число для преобразования
 * @returns {string} - Римское представление числа
 */
const arabicToRoman = (num) => {
    return Object.entries(romanRadix).reduce((result, [symbol, value]) => {
        while (num >= value) {
            num -= value;
            result += symbol;
        }
        return result;
    }, '');
}

