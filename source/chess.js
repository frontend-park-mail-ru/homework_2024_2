'use strict';

/**
 * Функция для рисования ASCII-шахматной доски размера N x N символов.
 *
 * @param {number} N - Размер шахматной доски (число строк и столбцов)
 * @returns {string} - Строка, представляющая шахматную доску
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

  let board = ''; 

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      board += (i + j) % 2 === 0 ? '*' : ' ';
    }
    board += '\n';
  }

  return board;
};
