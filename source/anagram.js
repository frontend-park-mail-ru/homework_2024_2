'use strict';

const MIN_GROUP_LENGTH = 2;

/**
 * Returns an error if an argument is null or undefined
 * or if words is not an array
 * @param {any} words - argument 
 */
const isValid = (words) => {
    if(!words || !Array.isArray(words)) {
        throw new TypeError('not an array');
    }
};

/** 
 * @param {Array} words - Input words
 */
const anagram = (words) => {
    try{
        isValid(words);
    }
    catch(e){
        console.error(e.message);
        return;
    }

    const result = words.reduce((groups, word) => {
        if(typeof word == 'string') {
            const item = word.split('').sort().join('');
            if(!groups[item]) {
                groups[item] = [];
            }
            groups[item].push(word);
        }
        return groups;
    }, {});


    return Object.values(result)
                 .filter(group => group.length >= MIN_GROUP_LENGTH)
                 .map(group => group.sort())
                 .sort((a, b) => a[0].localeCompare(b[0]));
}
