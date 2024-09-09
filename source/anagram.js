'use strict';

const anagram = words => {
    const groups = {};
    for (const word of words){
        const item = word.split('').sort().join('');
        if(!groups[item]){
            groups[item] = [];
        }
        groups[item].push(word);
    }
    let result = Object.values(groups).filter(group => group.length >= 2);
    return result.map(group => group.sort()).sort((a, b) => a[0].localeCompare(b[0]));
}