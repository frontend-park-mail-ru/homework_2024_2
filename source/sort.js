'use strict';

const sort = (sentence) => {
    if (typeof(sentence) !== 'string') {
        return "";
    }
    sentence = sentence.trim()
    if (sentence.length === 0){
        return "";
    }
    let str = sentence.toLowerCase().replaceAll('ё', 'е');
    let words = sortLetterInWords(str.split(" "));
    words.sort();
    return words.join(" ");
}

let sortLetterInWords = (words) => {
    words.forEach((word, i)=> {
        let letterArray = word.split("");
        letterArray.sort();
        words[i] = letterArray[0].toUpperCase() + letterArray.join("").slice(1);
    });
    return words;
}

