'use strict';

/**
 * Форматирует массив чисел в строки, разбивая их на заданное количество столбцов.
 * Каждое число выравнивается по ширине, основанной на длине самого длинного числа в соответствующем столбце.
 *
 * @param {number[]} input - Массив чисел, которые нужно отформатировать.
 * @param {number} columns - Количество столбцов для форматирования.
 * @returns {string} - Строка, представляющая отформатированные числа в столбцах.
 * @throws {RangeError} - Если количество столбцов меньше 1 или превышает размер массива.
 * @throws {TypeError} - Если входные данные не содержат только целые числа.
 */
const format = (input, columns) => {
    if (columns < 1) {
        throw new RangeError('Columns amount must be a positive integer');
    }
    if (columns > input.length) {
        throw new RangeError('Columns amount must be greater than array size');
    }

    let widths = [];
    input.forEach((_, i) => {
        widths[i] = Math.max(...input.filter((_, j) => j % columns === i % columns)
            .map(num => num.toString().length));
    })

    let output = '';
    input.forEach((_, i) => {
        if (typeof input[i] !== 'number') {
            throw new TypeError('Input data must contain integers only')
        }

        output += input[i].toString().padStart(widths[i % columns]);
        if (i % columns === columns - 1 && i !== input.length - 1) {
            output += '\n';
        } else if (i !== input.length - 1) {
            output += ' ';
        }
    })

    return output;
}
