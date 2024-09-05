'use strict';

const MIN_TREE_LAYERS_COUNT = 3;
const STARS_PER_LINE_INCREM_FACTOR = 2;

/**
 * Проверяет значение высоты дерева на корректность:
 * высота должна иметь либо строковый тип, либо целочисленный тип
 * 
 * @param {number|string} height 
 * 
 * @returns {boolean} Результат проверки значения высоты дерева
 */
const isHeightIsCorrect = (height) => {
    if (typeof height !== 'number' && typeof height !== 'string') {
        return false;
    }
    const heightInt = parseFloat(height);
    return Number.isInteger(heightInt);
}

/**
 * Возвращает ASCII-ёлочку заданной высоты, состоящую из звёздочек
 * 
 * @param {number|string} height 
 * 
 * @throws {TypeError} для некорректного значения параметра
 * 
 * @returns {string} ASCII-ёлочка из звёздочек
 */
const tree = (height) => {
    if (!isHeightIsCorrect(height)) {
        throw new TypeError('Please provide a valid value for the tree height!');
    } else if (height < MIN_TREE_LAYERS_COUNT) {
        return null;
    }

    let resultTree = '';
    const width = (height - 1) * STARS_PER_LINE_INCREM_FACTOR - 1;
    const center = Math.floor(width / 2);

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Обработка последней строки
            if (i === height - 1) {
                // Палочка
                if (j === center) {
                    resultTree += '|';
                } else {
                    resultTree += ' ';
                }
                continue;
            }
            // Звездчоки
            if (center - i <= j && j <= center + i) {
                resultTree += '*';
                continue;
            }
            // Иначе пробел
            resultTree += ' ';
        }
        resultTree += '\n';
    }

    return resultTree;
}
