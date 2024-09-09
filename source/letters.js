'use strict';
/**
 * Removes repeating characters from string
 * @param {string} str - Initial string
 * @param {boolean} flag - If its not set, function will remove all occurrences of repeating characters, if set to true, the first occurrence of repeating characters will remain, if set to false, the same thing will happen with last occurrence
 * @returns {string} String without repeating characters
 */
const letters = (str, flag) => {
    str = String(str);
    let finalString = '';
    const charsCount = new Map();

    for(const char of str){
        charsCount.set(char, (charsCount.get(char) ?? 0) + 1);
    }

    for(const char of str){
        if(charsCount.get(char) === 1){
            finalString += char;
        } else if(flag === true && charsCount.has(char)){
            finalString += char;
            charsCount.delete(char);
        } else if(flag === false){
            charsCount.set(char, charsCount.get(char) - 1);
        }
    }

    return finalString;   
}