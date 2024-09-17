'use strict';

const anagram = words => {
    const groups = {};
    words ??= ['words', 'for', 'example', 'rof'];
    const MIN_GROUP_LENGTH = 2;
    if(!Array.isArray(words)){
        return 'Not an array';
    }
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