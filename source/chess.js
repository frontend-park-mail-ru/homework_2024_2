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
    const [first, second] = isWhiteFirst ? ['*', ' '] : [' ', '*'];
    for (let i = 0; i < size; i++) {
        line += i % 2 ? first : second;
    }
    line += '\n';
    return line;
}


/**
 * 
 * @param {number} count 
 * @param {Object} line first and second line
 * @param {string} line.first first line 
 * @param {string} line.second second line 
 * @returns {string} line of deck
 */
const alternateRepeat = (count, {first, second}) => {
    return count % 2 ? second : first;
}

/**
 * Chess deck by the given size
 * @param {number} size size of chess deck
 * @returns {string | null} chess deck
 * @throws {Error} The wrong type of size
 */
const chess = (size) => {
    if (isNaN(size) || typeof size !== 'number' && typeof size !== 'string') {
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
