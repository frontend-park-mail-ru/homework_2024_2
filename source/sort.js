'use strict';

/** 
    * сортировка букв в слове и слов в строке, первая буква в каждом слове становится прописной, а все остальные строчные
    * @param {string} str - строка, которую необходимо отсортировать
    * Если параметр не строка, то выдается ошибка RuntimeError с сообщением - 'Некорректные данные'   
    * @returns {string} Строку с отсортированными буквами в словах и отсортированными словами в строке, с первой прописной и остальными строчными бувами в каждом слове 
*/
const sort = (str) =>{
    if (typeof str === 'string' || str instanceof String){
        const arrayOfStrings = str.split(' ');
        const result = arrayOfStrings.reduce((res, item) => {

        item = item.toLowerCase().split('').sort((a, b) => a.localeCompare(b)).join('');
        if (item) {
            item = item[0].toUpperCase() + item.slice(1);
        }
        
        res.push(item);
        return res;
        
        }, []);

        return result.sort((a, b) => a.localeCompare(b)).join(' ');
        
    }

    throw new TypeError('Параметр должен быть строкой');
};
