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
    if (!input.every(val => typeof val === 'number')) {
        throw new TypeError('Input data must contain integers only');
    }

    const widths = Array(columns).fill(0).reduce((acc, _, index) => {
        acc[index] = Math.max(...input.filter((_, j) => j % columns === index % columns)
            .map(num => num.toString().length));
        return acc;
    }, []);

    return input.reduce((acc, val, i) => {
        const currColumn = i % columns;
        acc += val.toString().padStart(widths[currColumn]);

        if (currColumn === columns - 1 && i !== input.length - 1) {
            return acc + '\n';
        }
        
        if (i !== input.length - 1) {
            return acc + ' ';
        }

        return acc
    }, '');
}
