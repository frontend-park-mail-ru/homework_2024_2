'use strict'

/** 
 * @param {number|string} input - Входное значение, которое может быть числом или строкой, представляющей либо римские цифры, либо арабские числа.
 * @returns {string|number} - Возвращает римское число (строка) при вводе арабского числа, или арабское число (число) при вводе римского числа.
 */
function roman(input) {
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

    // распознование римского числа
    if (typeof input === 'string') {
        input = input.trim().toUpperCase();
        if (/^[IVXLCDM]+$/.test(input)) {
            let num = 0;
            let prev = 0;
            for (let i = input.length - 1; i >= 0; i--) {
                let symbol = input[i];
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

        // строку конвертируем в число
        input = parseInt(input, 10);
        if (isNaN(input)) {
            throw new Error('Строку не удалось преобразовать в число');
        }
    }

    // число конвертируем в римскую форму
    if (typeof input === 'number') {
        if (input <= 0) {
            throw new RangeError('Значение должно бытьположительным числом');
        }

        if(!Number.isInteger(input)){
            throw new TypeError('Значение должно быть целым числом');
        }

        let result = '';
        for (const [symbol, value] of Object.entries(romanRadix)) {
            while (input >= value) {
                input -= value;
                result += symbol;
            }
        }
        return result;
    }

    throw new Error('Неподдерживаемый формат ввода');
}

