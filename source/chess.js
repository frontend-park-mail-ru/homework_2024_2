'use strict';
const MIN_SIZE_BOARDER = 2;

/**
 * Рисует ASCII-шахматрую доску из звёздочек (в левом верхнем углу всегда стоит звёздочка) 
 * 
 * @param {number} sizeBoard - размер шахматной доски
 * @returns {string} - шахматная доска 
 * @example
 * 
 * chess(3);
 * // =>
 * "* *
 *   * 
 *  * *"
 */
const chess = (sizeBoard) => {
    if (isNaN(sizeBoard) || (!Number.isInteger(+sizeBoard)) || sizeBoard < MIN_SIZE_BOARDER ) {
        return null;
    }
    return Array.from({length: sizeBoard}, (element,index) => {
        let line = (index % 2 == 0) ? '* ' : ' *'; // Проверяем на четность/нечетность строки
        line = line.repeat(Math.floor(sizeBoard / 2)) // Повторяем закономерную часть
        if (sizeBoard % 2 != 0) {
            line += (index % 2 == 0) ? '*' : ' '; // Если у нас размер доски нечетный, надо количество символов дополнить до нечетного
        } 
        return line + '\n' // Добовляем конец строки и возвращаем её.
    }).join('') // Возвращаем сконкатенированую строку
};
