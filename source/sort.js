'use strict';

/**
 * Сортирует буквы в словах, а затем сортирует сами слова в тексте.
 *
 * @param {string} sentence - Строка, содержащая исходный текст.
 * @returns {String} Строка, содержащая отсортированный текст.
 * @throws {TypeError} Если аргумент не является строкой.
 * @throws {RangeError} Если строка пустая.
 */
const sort = (sentence) => {
    if (typeof(sentence) !== 'string' && !(sentence instanceof String)) {
        throw new TypeError('wrong type of data: should be string');
    }
    if (sentence.trim() === ''){
        throw new RangeError('empty data');
    }
    let str = sentence.trim().toLowerCase().replaceAll('ё', 'е');
    let words = sortLetterInWords(str.split(' '));
    words = mySort(words);
    return words.join(' ');
};

/**
 * Сортирует буквы в словах, а затем сортирует сами слова в тексте.
 *
 * @param {Array} words - Массив слов.
 * @returns {Array} Массив, в каждом слове отсортированны буквы.
 */
let sortLetterInWords = (words) => {
    words.forEach((word, i)=> {
        let letterArray = word.split('');
        letterArray = mySort(letterArray);
        words[i] = letterArray[0].toUpperCase() + letterArray.join('').slice(1);
    });
    return words;
};

/**
 * Сортирует массив по возрастанию.
 *
 * @param {Array} array - Массив.
 * @returns {Array} Отсортированный массив.
 */
const mySort = (array) => {
   if (array.length <= 1){
       return array;
   }
   let pivot = array[0];
   let leftArr = [];
   let rightArr = [];
    array = array.slice(1);
    for (const value of array) {
        if (value < pivot){
            leftArr.push(value);
        } else {
            rightArr.push(value);
        }
    }
    return [...mySort(leftArr), pivot, ...mySort(rightArr)];
};

