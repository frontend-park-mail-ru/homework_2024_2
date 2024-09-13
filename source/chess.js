'use strict';

/**
 * Функция для рисования ASCII-шахматной доски размера N x N символов.
 *
 * @param {number} N - Размер шахматной доски (число строк и столбцов)
 * @returns {string} - Строка, представляющая шахматную доску
 * @throws {TypeError} - Если значение `N` не является числом или его нельзя преобразовать в число.
 * @throws {TypeError} - Если значение `N` не является целым числом.
 * @throws {TypeError} - Если значение `N` меньше или равно 1.
 */
const chess = (N) => {
  const size = Number(N);

  if (isNaN(size)) {
    throw new TypeError('Size must be a number.');
  }

  if (!Number.isInteger(size)) {
    throw new TypeError('Size must be an integer.');
  }

  if (size <= 1) {
    throw new TypeError('Size must be a positive integer more than 1.');
  }

  let boardArray = []; 

  for (let i = 0; i < size; i++) {
    let row = ''
    for (let j = 0; j < size; j++) {
      row += (i + j) % 2 === 0 ? '*' : ' ';
    }
    boardArray.push(row);
  }

  return boardArray.join('\n') + '\n';
};
