'use strict';

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
    const oddLineGen = size => {
        let line = '';
        for (let i = 0; i < size; i++) {
            i % 2 == 0 ? line += '*' : line += ' '
        }
        return line
    }

    const evenLineGen = size => {
        let line = '';
        for (let i = 0; i < size; i++) {
            i % 2 == 0 ? line += ' ' : line += '*'
        }
        return line
    }

    

    const numericSize = +size;
    
    if (
        typeof numericSize !== 'number' || 
        isNaN(numericSize) || 
        !Number.isInteger(numericSize) || 
        size === null || 
        Array.isArray(size) || 
        (typeof numericSize === 'object' && numericSize !== null) ||
        typeof size === 'boolean'
    ) {
        throw new Error('Size must be an integer.');
    }


    if (numericSize < 1) throw new Error('Size must be more than 1');
    

    const oddLine = oddLineGen(size);
    const evenLine = evenLineGen(size);
    let board = '';
    for (let i = 0; i < size; i++) {
        i % 2 == 0 ? board += oddLine : board += evenLine
        board += '\n'; 
    }


    return board;
};



