'use strict';

/**
 * Функция для подсчета длины каждой колонки.
 * 
 * @param {Array<Array<number>>} rows - Массив строк, полученный из исходного массива
 * @param {number} columns - Количество колонок, на которые нужно разделить исходный массив
 * @returns {Array<number>} - Массив длин каждой колонки
 */
const columnWidth = (rows, columns) => {
  const columnLengths = Array.from({ length: columns }, (_, columnIndex) => 
    rows.map(row => (row[columnIndex] !== undefined ? String(row[columnIndex]).length : 0))
  );

  const columnWidths = columnLengths.map(lengths => Math.max(...lengths));
  return columnWidths;
}

/**
 * Функция, форматирующая массив чисел в несколько колонок. Числа в колонках идут слева направо, сверху вниз.
 * 
 * @param {Array<number>} input - Исходный массив целых чисел
 * @param {number} columns - Количество колонок, на которые нужно разделить массив
 * @throws {TypeError} - Ошибка, возникающая при передаче в функцию чего-то кроме массива целых чисел
 * @returns {string} - Форматированная строка - исходный массив, разделенный на колонки
 */
const format = (input, columns) => {
    if (!Array.isArray(input) || !input.every((number) => Number.isInteger(number))) {
      throw new TypeError('Invalid data');
    };

    const rows = Array.from({ length: Math.ceil(input.length / columns) }, (_, i) => 
      input.slice(i * columns, i * columns + columns)
    );    

    const columnWidths = columnWidth(rows, columns);

    return rows
      .map(row =>
        row
          .map((number, columnIndex) => number.toString().padStart(columnWidths[columnIndex], ' '))
          .join(' ')
      )
      .join('\n');
  }

