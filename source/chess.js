"use strict";

/**
 * 
 * @param {number} size 
 * @param {number} isWhiteFirst 
 * @returns {string}
 */
const getChessLine = (size, isWhiteFirst) => {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += i % 2 == isWhiteFirst ? '*' : ' ';
    }
    line += '\n';
    return line;
}

/**
 * 
 * @param {number} size 
 * @returns {string}
 */
const chess = (size) => {
    const minSize = 2;
    if (isNaN(size) || size < minSize) {
        return null;
    }
    let first = getChessLine(size, false);
    let second = getChessLine(size, true);

    let result = '';
    for (let i = 0; i < size; i++) {
        result += i % 2 === 0 ? first : second;
    }
    return result;
}