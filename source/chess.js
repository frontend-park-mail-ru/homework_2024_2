'use strict';

const MIN_SIZE = 2;

/**
 * Getting first and second line of the chess deck
 * @param {number} size size of chess deck
 * @param {boolean} isWhiteFirst if first cell in deck is white -> true
 * @returns {string} line of deck
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
 * Chess deck by the given size
 * @param {number} size size of chess deck
 * @returns {string, null} chess deck
 * @throws {Error} The wrong type of size
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
