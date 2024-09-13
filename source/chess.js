'use strict';

/**
 * Функция для рисования ASCII-шахматной доски размера N x N символов.
 *
 * @param {number|string} N - Размер шахматной доски (число строк и столбцов)
 * @returns {string} - Строка, представляющая шахматную доску
 * @throws {TypeError} - Если значение `N` не является числом или его нельзя преобразовать в число.
 * @throws {TypeError} - Если значение `N` не является целым числом.
 * @throws {TypeError} - Если значение `N` меньше или равно 1.
 */
const chess = (N) => {
  if (!(typeof N == 'number' || typeof N == 'string' || N instanceof Number || N instanceof String)) {
    throw new TypeError('Size must be a number.');
  }

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

  const boardArray = []; 

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      boardArray.push((i + j) % 2 === 0 ? '*' : ' ');    
    }
    boardArray.push('\n');

  }

  return boardArray.join('');
};
