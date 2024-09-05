'use strict';

const MIN_SIZE = 2;

/**
 * Interleaving strings first and second
 * @param {number | string} size size of chess deck
 * @param {Object} line first and second line
 * @param {string} line.first first line 
 * @param {string} line.second second line 
 * @returns {string} line of deck
 */
const alternateRepeat = (size, {first, second}) => {
    let line = ''
    for (let i = 0; i < size; i++) {
        line += i % 2 ? second : first;
    }
    return line
}

/**
 * Getting first and second line of the chess deck
 * @param {number | string} size size of chess deck
 * @param {boolean} isWhiteFirst if first cell in deck is white -> true
 * @returns {string} line of deck
 */
const getChessLine = (size, isWhiteFirst) => {
    const [first, second] = isWhiteFirst ? [' ', '*'] : ['*', ' '];
    let line = alternateRepeat(size, {second, first})
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

    return alternateRepeat(size, {first, second});
}
