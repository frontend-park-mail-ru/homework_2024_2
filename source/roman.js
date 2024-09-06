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
const RomanNum = /^[IVXLCDM]+$/;

/** 
 * @param {number|string} input - Входное значение, которое может быть числом или строкой, представляющей либо римские цифры, либо арабские числа.
 * @returns {string|number} - Возвращает римское число (строка) при вводе арабского числа, или арабское число (число) при вводе римского числа.
 * @throws {TypeError} - Если входное значение имеет неверный тип.
 */
const roman = (input) => {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) { 
            const parsed = parseInt(input); 
            return arabicToRoman(parsed);
        }
        return romanToArabic(input);
    }
    if (typeof input === 'number') {
        return arabicToRoman(input);
    }

    throw new TypeError('Неподдерживаемый формат ввода');
}

/**
 * @param {string} roman - Римское число для преобразования.
 * @returns {number} - Арабское представление римского числа.
 * @throws {TypeError} - Если входное значение не является строкой.
 * @throws {TypeError} - Если строка содержит недопустимые символы или не может быть преобразована в число.
 */
const romanToArabic = (roman) => {
    if (typeof roman !== 'string') {
        throw new TypeError('Входное значение должно быть строкой');
    }
    let trimmed = roman.trim().toUpperCase();
    if (RomanNum.test(trimmed)) {
        let num = 0;
        let prev = 0;
        for (let i = trimmed.length - 1; i >= 0; i--) {
            let symbol = trimmed[i];
            let value = romanRadix[symbol];
            if (value < prev) {
                num -= value;
            } else {
                num += value;
            }
            prev = value;
        }
        return num;
    }
    let parsed = parseInt(trimmed);
    if (isNaN(parsed)) {
        throw new TypeError('Строку не удалось преобразовать в число');
    }
    return parsed;
}


/**
 * @param {number} num - Арабское число для преобразования.
 * @returns {string} - Римское представление числа.
 * @throws {TypeError} - Если входное значение не является целым числом.
 * @throws {RangeError} - Если число меньше или равно нулю.
 */
const arabicToRoman = (num) => {
    if (!Number.isInteger(num)) {
        throw new TypeError('Значение должно быть целым числом');
    }

    if (num <= 0) {
        throw new RangeError('Значение должно быть положительным числом');
    }

    let result = '';
        Object.entries(romanRadix).forEach(([symbol, value]) => {
            while (num >= value) {
                num -= value;
                result += symbol;
            }
        });
    return result;
}