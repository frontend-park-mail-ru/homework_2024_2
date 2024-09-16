'use strict';
const MinSizeBoarder = 2;

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
    if (isNaN(sizeBoard) || (!Number.isInteger(+sizeBoard)) || sizeBoard < MinSizeBoarder ) {
        return null;
    }
    let board = Array.from({length: sizeBoard}, () => '')
    board.forEach((element, index) => {
        let line = ' *'.repeat(Math.floor(sizeBoard/2)-1);
        if (sizeBoard % 2 == 0)
        {
            if (index % 2 == 0)
                {
                    line = '*' + line + ' \n';
                } else {
                    line = line + ' *\n'
                }
        }
        else {
            if (index % 2 == 0)
                {
                    line = '* *' + line + '\n';
                } else {
                    line = line + ' * \n'
                }
        }
        board[index] = line;

    });
    return board.join('');
};
