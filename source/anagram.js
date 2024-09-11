'use strict';

/**
 * 
 * @param {string[]} strs - array of strings
 * @throws {TypeError} - throws error if the input is not array of strings
 * @returns {strings[][]} - an array of arrays with anagrams groups, whose length is greater than or equal to minElemCount
 * 
 */
const anagram = (strs) => {
    const anagramsMap = new Map();
    const minElemCount = 2;
    
    if (!(strs instanceof Array) || !(strs.every((elem) => typeof elem == "string"))) {
        throw new TypeError("parameter is invalid");
    }

    strs.sort();

    strs.forEach((str) => {
        const sortedStr = str.split('').sort().join('');
        const anagramsArr = anagramsMap.get(sortedStr) ?? [];
        anagramsArr.push(str);
        anagramsMap.set(sortedStr, anagramsArr);
    });
    
    const anagramGroups = [];
    for (const [ _, anagrams] of anagramsMap) {
        if (anagrams.length >= minElemCount) {
            anagramGroups.push(anagrams);
        }
            
    }

    return anagramGroups;
}
