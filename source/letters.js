'use strict';
/**
 * Removes repeating characters from string
 * @param {string} str - Initial string
 * @param {boolean} flag - If its not set, function will remove all occurrences of repeating characters, if set to true, the first occurrence of repeating characters will remain, if set to false, the same thing will happen with last occurrence
 * @returns {string} String without repeating characters
 */
const letters = (str, flag) => {
    str = String(str);
    let repeatingCharacters = '', uniqeCharacters = '';
    let map = new Map();
    for(let i = 0; i < str.length; i++){
        if(!map.has(str[i])){
            map.set(str[i], 1);
            uniqeCharacters += str[i];
        } else {
            if(flag == false){
                uniqeCharacters = uniqeCharacters.replace(str[i], '');
                uniqeCharacters += str[i];
            }
            repeatingCharacters += str[i];
        }
    }
    if(flag == undefined){
        for(let i = 0; i < repeatingCharacters.length; i++){
            uniqeCharacters = uniqeCharacters.replaceAll(repeatingCharacters[i], '');
        }
        return uniqeCharacters;
    }
    return uniqeCharacters;
}

