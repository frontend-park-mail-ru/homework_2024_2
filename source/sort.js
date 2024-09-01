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
    words = mySort(words)
    return words.join(" ");
}

let sortLetterInWords = (words) => {
    words.forEach((word, i)=> {
        let letterArray = word.split("");
        letterArray = mySort(letterArray)
        words[i] = letterArray[0].toUpperCase() + letterArray.join("").slice(1);
    });
    return words;
}

const mySort = (array) => {
   if (array.length <= 1){
       return array;
   }
   let pivot = array[0];
   let leftArr = [];
   let rightArr = [];
    array = array.slice(1)
    for (const value of array) {
        if (value < pivot){
            leftArr.push(value);
        } else {
            rightArr.push(value);
        }
    }
    return [...mySort(leftArr), pivot, ...mySort(rightArr)];
}

