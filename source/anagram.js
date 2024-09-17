'use strict';

/**
 * Returns an error if an argument is null or undefined
 * @param {any} arg - argument 
 */
const isNullOrUndefined = arg => {
    if(arg === null || arg === undefined){
        throw new Error('words equals null or undefined');
    }
};

/** 
 * Returns an error if words is not an array
 * @param {any} words - Input words
 */
const ifWordsIsArray = words => {
    if(!Array.isArray(words)){
        throw new Error('not an array');
    }
};

/** 
 * @param {Array} words - Input words
 */
const anagram = words => {
    try{
        ifWordsIsArray(words);
    }
    catch(e){
        console.error(e.message);
        return;
    }

    const groups = {};
    const MIN_GROUP_LENGTH = 2;
    
    for (const word of words){
        if(typeof word != 'string'){
            continue;
        }

        const item = word.split('').sort().join('');
        if(!groups[item]){
            groups[item] = [];
        }
        groups[item].push(word);
    }
    let result = Object.values(groups).filter(group => group.length >= MIN_GROUP_LENGTH);
    return result.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}