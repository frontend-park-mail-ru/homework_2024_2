'use strict';

const MIN_TREE_LAYERS_COUNT = 3;
const STARS_PER_LINE_INCREM_FACTOR = 2;

/**
 * Возвращает ASCII-ёлочку заданной высоты, состоящую из звёздочек
 * 
 * @param {number|string} height 
 * @throws {TypeError} для некорректного значения параметра
 * @returns {string|null} ASCII-ёлочка из звёздочек
 */
const tree = (height) => {
    if (!Number.isInteger(+height)) {
        throw new TypeError('Please provide a valid value for the tree height!');
    }
    if (height < MIN_TREE_LAYERS_COUNT) {
        return null;
    }

    let resultTree = '';
    const width = (height - 1) * STARS_PER_LINE_INCREM_FACTOR - 1;
    const center = Math.floor(width / 2);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Обработка последней строки
            if (i === height - 1) {
                // Палочка или пробел
                resultTree += j == center ? '|' : ' ';
                continue;
            }

            const isTree = center - i <= j && j <= center + i;
            // Звездочка или пробел в зависимости от текущего индекса
            resultTree += isTree ? '*' : ' ';
        }
        resultTree += '\n';
    }

    return resultTree;
}
