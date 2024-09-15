'use strict';
const MinSizeBoarder = 2;

/**
 * Рисует ASCII-шахматрую доску из звёздочек (в левом верхнем углу всегда стоит звёздочка) 
 * 
 * @param {number} sizeBoard - размер шахматной доски
 * @returns {string} - шахматная доска 
 * @example
 * 
 * chess(3);
 * // =>
 * "* *
 *   * 
 *  * *"
 */
const chess = (sizeBoard) => {
    if (isNaN(sizeBoard) || (!Number.isInteger(+sizeBoard)) || sizeBoard < MinSizeBoarder ) {
        return null;
    }
    let board = [];
    for (let i = 0; i < sizeBoard; i++) {
        for (let j = 0; j < sizeBoard; j++) {
            if ((i + j) % 2 == 0) {
                board.push("*");
            }
            if (!((i + j) % 2 == 0)) {
                board.push(" ");
            }
        }
        board.push("\n");
    }
    return board.join('');
};
