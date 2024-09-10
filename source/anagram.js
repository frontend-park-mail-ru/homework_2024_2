'use strict';
const anagram = (strs) => {
    const anagramsMap = new Map();
    const minElemCount = 2

    if(typeof strs != "object" || !(strs instanceof Array)){
        throw new TypeError("parameter is not a list")
    } else if (strs.length != 0) {
        strs.forEach((item) => {
            if (typeof item != "string"){
                throw new TypeError("bad parameters")
            }
        })
    }
    
    strs.sort();

    strs.forEach((str) => {
        const sortedStr = str.split('').sort().join('');
        const anagramsArr = anagramsMap.get(sortedStr) ?? []
        anagramsArr.push(str);
        anagramsMap.set(sortedStr, anagramsArr);
    });
    
    const anagramGroups = [];
    for(const [ _, anagrams] of anagramsMap){
        if (anagrams.length >= minElemCount) {
            anagramGroups.push(anagrams);
        }
            
    }

    return anagramGroups;
}
