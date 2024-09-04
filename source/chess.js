'use strict';

const MIN_SIZE = 2;

/**
 * Получение первой и второй линии шахматного поля
 * @param {number} size 
 * @param {boolean} isWhiteFirst 
 * @returns {string}
 */
const getChessLine = (size, isWhiteFirst) => {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += i % 2 === isWhiteFirst ? '*' : ' ';
    }
    line += '\n';
    return line;
}

/**
 * Принимает ее размер и возвращает поле шахматной доски
 * @param {number} size 
 * @returns {string, null}
 * @throws {Error}
 */
const chess = (size) => {
    if (isNaN(size)) {
        throw new Error('The wrong type of size');
    }
    if (size < MIN_SIZE) {
        return null;
    }
    const first = getChessLine(size, false);
    const second = getChessLine(size, true);

    let result = '';
    for (let i = 0; i < size; i++) {
        result += i % 2 ? second : first;
    }
    return result;
}
