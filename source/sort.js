'use strict';

const collator = new Intl.Collator();


const sort = (sentence) => {
    if (typeof(sentence) !== 'string') {
        return "";
    }
    sentence = sentence.trim()
    if (sentence.length === 0){
        return "";
    }
    let str = sentence.toLowerCase();
    let words = sortLetterInWords(str.split(" "));
    words.sort(collator.compare);
    return words.join(" ");
}

function sortLetterInWords(words){
    words.forEach(function (word, i){
        let letterArray = word.split("");
        letterArray.sort(collator.compare);
        words[i] = letterArray[0].toUpperCase() + letterArray.join("").slice(1);
    });
    return words;
}

