'use strict';

/**
 * Форматирует массив чисел в строки, разбивая их на заданное количество столбцов.
 * Каждое число выравнивается по ширине, основанной на длине самого длинного числа в соответствующем столбце.
 *
 * @param {number[]} input - Массив целых чисел, которые нужно отформатировать.
 * @param {number} columns - Количество столбцов для форматирования.
 * @returns {string} - Строка, представляющая отформатированные числа в столбцах.
 * @throws {Error} - Если количество столбцов меньше 1 или превышает размер массива.
 * @throws {TypeError} - Если входные данные не содержат только целые числа.
 */
const format = (input, columns) => {
    if (columns < 1) {
        throw new RangeError('Columns amount must be a positive integer');
    }
    if (columns > input.length) {
        throw new RangeError('Columns amount must be greater than array size');
    }

    let widths = new Array(columns);
    for (let i = 0; i < columns; i++) {
        widths[i] = Math.max(...input.filter((_, j) => j % columns === i % columns)
            .map(num => num.toString().length));
    }

    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] !== 'number') {
            throw new TypeError('Input data must contain integers only')
        }

        output += input[i].toString().padStart(widths[i % columns]);
        if (i === input.length - 1) {
            break;
        }

        if (i % columns === columns - 1) {
            output += '\n';
        } else {
            output += ' ';
        }
    }

    return output;
}
