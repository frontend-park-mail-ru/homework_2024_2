'use strict';

const anagram = words => {
    const groups = {};
    words ??= ['words', 'for', 'example'];
    const MIN_GROUP_LENGTH = 2;
    for (const word of words){
        const item = word.split('').sort().join('');
        if(!groups[item]){
            groups[item] = [];
        }
        groups[item].push(word);
    }
    let result = Object.values(groups).filter(group => group.length >= MIN_GROUP_LENGTH);
    return result.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}