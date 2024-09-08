'use strict';

const lineGen = size => {
    let oddLine = '';
    let evenLine = ''
    for (let i = 0; i < size; i++) {
        oddLine += (i % 2 === 0 ? '*' : ' ');
        evenLine += (i % 2 === 0 ? ' ' : '*');
    }
    return {oddLine, evenLine}
}


/**
 * Генерирует шахматную доску заданного размера.
 *
 * @param {number} size - Размер шахматной доски (должен быть целым положительным числом).
 * @returns {string} Строка, представляющая шахматную доску.
 * @throws {Error} Если размер не является целым положительным числом.
 *
 * @example
 * // Возвращает шахматную доску 3x3
 * console.log(chess(3));
 * // Output:
 * // * *
 * //  * 
 * // * *
 * //
 */
const chess = size => {
    
    
    if (typeof size !== 'number' && typeof size !== 'string') {
        throw new TypeError('Size must be a number.');
    }

    const numericSize = +size;

    if (!Number.isInteger(numericSize)) {
        throw new Error('Size must be an integer.');
    }

    if (numericSize <= 1) {
        throw new Error('Size must be a positive integer more than 1.');
    }

    

    const {oddLine, evenLine} = lineGen(numericSize);

    let board = '';
    for (let i = 0; i < numericSize; i++) {
        board += (i % 2 == 0 ? oddLine : evenLine)
        board += '\n'; 
    }


    return board;
};



