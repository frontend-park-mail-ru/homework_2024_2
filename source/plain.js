'use strict'; 

/** Принимает на вход массив массивов любой вложенности и создает из них один общий массив.
 * @param {any[]} arrays Массив массивов
 * @throws {TypeError} Если arrays это не массив
 * @returns {any[]} Объединенный массив
 * @example
 * const array = [1, [null, [3]], ['четыре']]
 * const joint_array = plain(array)
 * console.log(joint_array); // Вывод: [1, null, 3, 'четыре']
 */
const plain = arrays => {
    if (!Array.isArray(arrays)){
        throw new TypeError('Введен не массив');
    };
    
    return arrays.reduce((arr, i) => arr.concat(Array.isArray(i) ? plain(i) : i), [])
};
