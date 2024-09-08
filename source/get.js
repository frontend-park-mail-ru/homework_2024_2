'use strict';

/**
 * Получает путь к вложенному свойству объекта и возвращает значение этого свойства
 * @function
 * @param {object} obj - Объект, из которого нужно получить вложенное свойство
 * @param {string} path - Строка, которая содержит путь к искомому значению
 * @throws {Error} - Если указанный путь не строка
 * @returns {*} Найденное свойство или undefined, если свойства не существует
 */

const get = (obj, path) => {
    if (typeof path != 'string'){
        throw new Error;
    }

    if (typeof obj !='object' || !obj){
        return;
    }

    if (!path || path === '.'){
        return obj; 
    } 

    const parts = path.slice(1).split('.'); 

    const result = parts.reduce((acc, part) => {
        if (acc !== undefined) {
            acc = acc[part];
        }
        return acc;
    }, obj);
    
    return result;
}
