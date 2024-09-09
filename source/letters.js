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
    let map = new Map();
    for(let char of str){
        if(!map.has(char)){
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    for(let char of str){
        if(map.get(char) === 1){
            finalString += char;
        } else if(flag === true && map.has(char)){
            finalString += char;
            map.delete(char);
        } else if(flag === false){
            map.set(char, map.get(char) - 1);
        }
    }
    return finalString;
    
}
