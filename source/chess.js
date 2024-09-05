'use strict';

const MIN_SIZE = 2;

/**
 * 
 * @param {number} count index of cell
 * @param {Object} line first and second line
 * @param {string} line.first first line 
 * @param {string} line.second second line 
 * @returns {string} line of deck
 */
const alternateRepeat = (count, {first, second}) => {
    return count % 2 ? second : first;
}

/**
 * Getting first and second line of the chess deck
 * @param {number | string} size size of chess deck
 * @param {boolean} isWhiteFirst if first cell in deck is white -> true
 * @returns {string} line of deck
 */
const getChessLine = (size, isWhiteFirst) => {
    let line = '';
    const [first, second] = isWhiteFirst ? [' ', '*'] : ['*', ' '];
    for (let i = 0; i < size; i++) {
        line += alternateRepeat(i, {second, first})
    }
    line += '\n';
    return line;
}

/**
 * Chess deck by the given size
 * @param {number | string} size size of chess deck
 * @returns {string | null} chess deck
 * @throws {TypeError} The wrong type of size
 */
const chess = (size) => {
    if (!Number.isInteger(+size) || Array.isArray(size)) {
        throw new TypeError('The wrong type of size');
    }
    if (size < MIN_SIZE) {
        return null;
    }
    const first = getChessLine(size, false);
    const second = getChessLine(size, true);

    let result = '';
    for (let i = 0; i < size; i++) {
        result += alternateRepeat(i, {first, second})
    }
    return result;
}
