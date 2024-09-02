'use strict';

const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new Error('Argument must be an array');
    }
    if (words.some(word => typeof word !== 'string' || word === '' || [...word].some(symbol => !isNaN(symbol)))) {
        throw new Error('Array must only contain words');
    }

    const arrayMap = {};

    words.forEach((word) => {
        const letters = word.split('').sort((a, b) => a.localeCompare(b));
        if (!(letters in arrayMap)) {
            arrayMap[letters] = [];
        }

        arrayMap[letters].push(word);
    });

    return Object.values(arrayMap).filter(value => value.length > 1).map(value =>
        value.sort((a, b) => a.localeCompare(b))).sort();
}
