'use strict';

/** 
    * сортировка букв в слове и слов в строке, первая буква в каждом слове становится прописной, а все остальные строчные
    * @param {string} str - строка, которую необходимо отсортировать
    * Если параметр не строка, то выдается ошибка RuntimeError с сообщением - 'Некорректные данные'   
    * @returns {string} Строку с отсортированными буквами в словах и отсортированными словами в строке, с первой прописной и остальными строчными бувами в каждом слове 
*/
const sort = function (str){
    if (typeof(str) != 'string') throw new RuntimeError('Некорректные данные');

    let arrayOfStrings = str.split(' ');
    arrayOfStrings.forEach(function(item, i, arrayOfStrings){
        arrayOfStrings[i] = arrayOfStrings[i].toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
        if (arrayOfStrings[i]) arrayOfStrings[i] = arrayOfStrings[i][0].toUpperCase() + arrayOfStrings[i].slice(1);
       
    })
    arrayOfStrings.sort((a, b) => a.localeCompare(b));

    return arrayOfStrings.join(' ');
    
};
