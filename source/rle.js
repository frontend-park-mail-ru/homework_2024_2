'use strict';

/**
 * Performs Run-Length Encoding (RLE) on the input string.
 *
 * Run-Length Encoding is a basic form of data compression where
 * consecutive identical characters are replaced with the character
 * followed by the number of occurrences. If a character appears
 * only once, it is not followed by a number.
 *
 * Example:
 * - "aaabbc" would be encoded as "a3b2c".
 * - "abc" would remain "abc" (since no characters are repeated).
 *
 * @param {string} inputString - The string to be encoded using RLE.
 * @returns {string|null} The RLE encoded string, or null if the input is not a string.
 */
const rle = (inputString) => {
    if (typeof(inputString) !== "string" && !(inputString instanceof String)) {
        return null;
    }

    if (inputString.length <= 1) {
        return inputString; 
    }

    let currentSymbol = inputString[0];
    let stringRLE = "";
    let count = 0;
    for (let stringSymbol of inputString) {
        if (stringSymbol == currentSymbol) {
            count++;
        } else {
            stringRLE += `${currentSymbol}${count > 1 ? count : ''}`;
            currentSymbol = stringSymbol;
            count = 1;
        }

    }
    stringRLE += `${currentSymbol}${count > 1 ? count : ''}`;
    return stringRLE; 
}
